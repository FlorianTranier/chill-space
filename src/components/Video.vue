<template>
    <div class="corner">
        <iframe :class="{hidden: videoHidden}" id="video" width="200" height="200" src="https://www.youtube-nocookie.com/embed/5qap5aO4i9A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button id="hide-btn" @click="toggleVideo()">
            <font-awesome-icon id="musicIcon" icon="music" v-if="videoHidden" />
            <span v-else>Hide</span>
        </button>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const videoHidden = ref(true)

    function toggleVideo() {
        videoHidden.value = !videoHidden.value
    }

</script>

<style lang="scss" scoped>
    #video {
        width: 13rem;
        height: calc(13rem * 9 / 16);
        position: relative;
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

</style>