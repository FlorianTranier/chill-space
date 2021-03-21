<template>
    <font-awesome-icon id="resetIcon" icon="window-restore" @click="showInput = true; demo = false" />
    <div class="events">
        <div class="input-group" v-if="showInput">
            Link to your .ics file
            <input type="text" v-model="icsLink" class="input-calendar" />
            <button @click="submitIcsLink">Submit</button>
            <button @click="launchDemo">Demo</button>
        </div>
        <div v-else-if="demo">
            <li class="event">09:15 / 09:30 - Grab a coffee ☕</li>
            <li class="event">10:00 / 11:00 - Boring meeting 😢</li>
            <li class="event">14:00 / 16:00 - Be awesome 😎</li>
            <li class="event">19:30 / 20:30 - Cook something 👨‍🍳</li>
            <li class="event">21:00 / 23:00 - Watch your favorite movie 🎬</li>
        </div>
        <div v-else>
            <div v-if="todaysEvents.length > 0">
                <div class="event" v-for="(event, index) in todaysEvents" :key="`event-${index}`">
                    {{ event.startDate.slice(9,11) }}:{{event.startDate.slice(11, 13)}}
                    / {{ event.endDate.slice(9,11) }}:{{event.endDate.slice(11, 13)}}
                    - {{event.summary}}
                </div>
            </div>
            <div class="event no-border" v-else>No boring meetings today<br />Enjoy your day :)</div>
        </div>
    </div>
</template>

<script>
    import icsToJson from 'ics-to-json'
    import { ref } from 'vue'

    export default {
        async setup() {
            const icsLink = ref(localStorage.icsLink)
            const todaysEvents = ref(icsLink.value ? await getTodayEvents() : [])
            const showInput = ref(!icsLink.value)
            const demo = ref(false)


            async function getTodayEvents() {
                const file = await fetch(icsLink.value);
                const events = await icsToJson(await file.text())

                const today = new Date()
                const year = today.getUTCFullYear()
                const month = (today.getUTCMonth() + 1).toString().padStart(2, "0")
                const day = (today.getDate() +4).toString().padStart(2, "0")
                
                const todayIcsString = `${year}${month}${day}`

                const todaysEvents = events.filter(event => event.startDate.startsWith(todayIcsString))
                
                todaysEvents.sort((a, b) =>
                    parseInt(a.startDate.split('T')[1]) - parseInt(b.startDate.split('T')[1])
                )
                
                return todaysEvents
            }

            async function submitIcsLink() {
                localStorage.setItem('icsLink', icsLink.value)
                showInput.value = false
                todaysEvents.value = await getTodayEvents()
                console.log(todaysEvents)
            }

            async function launchDemo() {
                showInput.value = false
                demo.value = true
            }
            
            return {
                icsLink,
                todaysEvents,
                submitIcsLink,
                showInput,
                launchDemo,
                demo
            }
        }
    }

</script>

<style lang="scss" scoped>
.event {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.411);

    &:hover {
        border-bottom: 0.1rem solid transparent;
        margin-left: 2rem;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
}

.no-border {
    border: none;
}

.input-group {
    display: block;
    width: 100%;
    font-size: 2rem;
}

.input-calendar {
    display: block;
    width: 100%;
    border: 0.1rem solid white;
}

#resetIcon {
    display: inline-block;
    position: relative;
    top: 0px;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    
    &:hover {
        cursor: pointer;
    }
}

</style>