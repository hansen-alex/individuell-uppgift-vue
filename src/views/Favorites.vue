<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFavoritesStore } from '../stores/favorites';
import RecipiePreview from '../components/RecipiePreview.vue';

const favoritesStore = useFavoritesStore();
const { favorites } = storeToRefs(favoritesStore);
</script>

<template>
  <h2>Favorites</h2>
  <ul>
    <RecipiePreview v-for="meal in favorites"
      :key="meal.id"
      :meal-id="meal.id"
      :meal-name="meal.name"
      :meal-image-u-r-l="meal.imageURL"
    />
  </ul>
</template>

<style scoped>
ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 4rem;
    padding: 0 10%;
    list-style: none;
}

@media (min-width: 768px) {
    ul {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1440px) {
    ul {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>