<template>
    <button class="btn btn-primary" @click="onMyLocationClicked" v-if="isBtnReady">
        Ir a mi ubicación
    </button>
</template>

<script>
    import {computed, defineComponent} from 'vue'
    import {useMapStore, usePlacesStore} from '@/composables'

    export default defineComponent({
        name: 'MyLocationBtn',
        setup() {

            const {userLocation, isUserLocationReady} = usePlacesStore()
            const {map, isMapReady} = useMapStore()

            return {
                isBtnReady: computed(() => isUserLocationReady.value && isMapReady.value),
                onMyLocationClicked: () => {
                    map.value?.flyTo({
                        center: userLocation.value,
                        zoom: 15
                    })
                }
            }
        }
    })
</script>

<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>