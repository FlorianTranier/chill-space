<template>
    <div class="side-component">
        <Suspense>
            <Calendar />
        </Suspense>
    </div>
</template>

<script setup>
    import Calendar from './Calendar.vue'
    import { Suspense } from 'vue'
</script>

<style lang="scss" scoped>
.side-component {
    grid-column: 4;
    grid-row: 2;
    align-self: center;
    max-height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 0.5rem;
        height: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.342);
        border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
}

@media screen and (max-width: 1280px) {
    .side-component {
        grid-column: 2;
        grid-row: 2;
        align-self: flex-start;
        margin-top: 2rem;
    }
}
</style>