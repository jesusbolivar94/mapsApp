<script lang="ts" src="./SearchResults.ts"></script>

<template>

    <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
        <h5>Cargando</h5>
        <span>Espere por favor...</span>
    </div>

    <ul class="list-group mt-3" v-else-if="places.length > 0">
        <li
            v-for="place in places"
            :key="place.id"
            class="list-group-item list-group-item-action text-left"
            :class="{ 'active': place.id === activePlace }"
            @click="onPlaceClick( place )">
            <h5>{{place.text}}</h5>
            <p>{{place.place_name}}</p>
            <div class="text-end">
                <button
                    class="btn btn-outline-primary btn-sm"
                    :class="( place.id === activePlace ) ? 'btn-outline-light' : 'btn-outline-primary'"
                    @click.self="getRouteDirections(place)"
                >
                    Direcciones
                </button>
            </div>
        </li>
    </ul>
</template>

<style scoped>
    li {
        cursor: pointer;
    }

    h5 {
        font-size: 15px !important;
    }

    p {
        font-size: 12px;
    }
</style>