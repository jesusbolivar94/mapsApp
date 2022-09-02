import {useStore} from "vuex";
import {StateInterface} from "@/store";
import {onMounted} from "vue";

export const usePlacesStore = () => {

    const store = useStore<StateInterface>()

    onMounted(async() => {
        if ( !store.getters['places/isUserLocationReady'] ) {
            await store.dispatch('places/getInitialLocation')
        }
    })

    return {

    }
}