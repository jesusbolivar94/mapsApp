<template>
    <map-view/>
    <MyLocationBtn/>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {usePlacesStore} from '@/composables'
import MapView from '@/components/mapview/MapView.vue'
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtn.vue' // @ is an alias to /src

export default defineComponent({
    name: 'HomeView',
    components: {
        MapView,
        MyLocationBtn,
    },
    setup() {
        const {} = usePlacesStore()
    }
})
</script>
