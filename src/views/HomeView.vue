<template>
    <map-view />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { usePlacesStore } from '@/composables';
import MapView from "@/components/mapview/MapView.vue";

export default defineComponent({
    name: 'HomeView',
    components: {
        MapView
    },
    setup() {
        const {} = usePlacesStore()
    }
});
</script>
