<template>
    <div class="corner">
        <button id="hide-btn" @click="toggleSettings()">
            <font-awesome-icon id="musicIcon" icon="cog" v-if="settingsHidden" />
            <span v-else>Hide</span>
        </button>
        <div class="settings" :class="{hidden: settingsHidden}">
            <iframe id="video" width="200" height="200" src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div>Color 1 : </div><input type="color" class="color-input" v-model="bgColor1" />
            <div>Color 2 : </div><input type="color" class="color-input" v-model="bgColor2" />
        </div>
    </div>
</template>

<script setup>
    import { ref, watch, onMounted } from 'vue'

    const settingsHidden = ref(true)
    const bgColor1 = ref(localStorage.bgColor1 ?? '#FF0000')
    const bgColor2 = ref(localStorage.bgColor2 ?? '#DC143C')

    const changeBgColors = (color1, color2) => {
        const bodyStyle = document.getElementById('app').style
        bodyStyle.setProperty('--gradient1', color1)
        bodyStyle.setProperty('--gradient2', color2)
    }

    onMounted(() => {
        changeBgColors(bgColor1.value, bgColor2.value)
    })

    watch([bgColor1, bgColor2], (newValues) => {
        changeBgColors(newValues[0], newValues[1])
        localStorage.setItem('bgColor1', bgColor1.value)
        localStorage.setItem('bgColor2', bgColor2.value)
    })

    function toggleSettings() {
        settingsHidden.value = !settingsHidden.value
    }

</script>

<style lang="scss" scoped>
    #video {
        display: block;
        width: 13rem;
        height: calc(13rem * 9 / 16);
        position: relative;
        grid-column: 1 / 3;
    }

    .corner {
        position: absolute;
        right: 0px;
        margin-top: 1rem;
    }

    #hide-btn {
        margin-right: 1rem;
        color: white;
        display: block;
        position: relative;
    }

    .color-input {
        display: inline;
        width: 3rem;
        height: 1.5rem;
        cursor: pointer;
    }

    .settings {
        color: white;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
    }

</style>