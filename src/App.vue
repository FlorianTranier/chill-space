<template>
    <Settings />
    <div class="container">
        <Date />
        <SideComponent />
    </div>
</template>

<script setup>
  import Date from './components/Date.vue'
  import SideComponent from './components/SideComponent.vue'
  import Settings from './components/Settings.vue'
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
    --gradient1: grey;
    --gradient2: black;
    width: 100vw;
    height: 100vh;
    font-family: 'Redressed',cursive;
    animation: bgAnimation 12s infinite linear alternate-reverse;
    background: linear-gradient(45deg, var(--gradient1), var(--gradient2));
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
    display: none !important;
}

@media screen and (max-width: 1280px) {
    .container {
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 0.3fr 2fr;
    }

    
}
</style>