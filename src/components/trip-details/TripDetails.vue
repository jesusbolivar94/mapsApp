<template>
    <div  v-if="distance"
        class="trip-container column">
        <div class="col">Distancia: <strong>{{ distance }} kms</strong></div>
        <div class="col">Duración: <strong>{{ duration }} minutos</strong></div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    import { useMapStore } from '@/composables'

    export default defineComponent({
    name: 'TripDetails',
    setup() {

        const { distance, duration } = useMapStore()

        return {
            distance,
            duration,
        }
    }
    })
</script>

<style scoped>
    .trip-container {
        padding: 10px;
        position: fixed;
        bottom: 40px;
        left: 30px;
        font-size: 15px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
        width: 350px;
    }
    strong {
        color: #42b983;
    }
</style>