<template>
    <Video />
    <div class="container">
        <Date />
        <SideComponent />
    </div>
</template>

<script setup>
  import Date from './components/Date.vue'
  import SideComponent from './components/SideComponent.vue'
  import Video from './components/Video.vue'
</script>

<style lang="scss">

@import 'assets/__global.scss';

@keyframes bgAnimation {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 0;
    }
}

#app {
    width: 100vw;
    height: 100vh;
    font-family: 'Redressed',cursive;
    animation: bgAnimation 4s infinite linear alternate;
    background: linear-gradient(90deg, rgb(248, 40, 40), orange);
    background-size: 300% 100%;
}

.container {
    width: 100vw;
    height: 100vh;
    color: white;
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr 2fr 1fr;
    grid-template-rows: 1fr 4fr 1fr;
}

.hidden {
        display: none;
    }

@media screen and (max-width: 1280px) {
    .container {
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    
}
</style>