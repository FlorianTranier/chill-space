<template>
    <div class="date">{{ date }}<br />{{ time }}</div>
</template>

<script>
    import { ref, onBeforeUnmount } from 'vue'
    export default {
        setup() {
            const interval = ref(null)
            const time = ref(null)
            const date = ref(null)

            onBeforeUnmount(() => clearInterval(interval))

            interval.value = setInterval(() => {
                time.value = Intl.DateTimeFormat(navigator.language, {
                    hour: 'numeric',
                    minute: 'numeric'
                }).format()

                date.value = Intl.DateTimeFormat(navigator.language, {
                    day: 'numeric',
                    month: 'numeric',
                    year: 'numeric'
                }).format()
            }, 1000)

            return {
                time, date
            }
        }
    }
    
</script>


<style lang="scss" scoped>
.date {
    grid-column: 2;
    grid-row: 2;
    text-align: center;
    align-self: center;
    font-size: 3rem;
    font-weight: bold;
}

@media screen and (max-width: 1280px) {
    .date {
        grid-column: 2;
        grid-row: 1;
    }
}
</style>