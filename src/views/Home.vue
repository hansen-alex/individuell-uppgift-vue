<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import RecipiePreview from '../components/RecipiePreview.vue';

const loading = ref(false);
const data = ref<any>(null);

const searchTerm = ref<string>("");
const searchData = ref<any>(null);

const fetchRecipie = async () => {
    loading.value = true;

    try {
        const result = (await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=ha`)).data.meals || [];
        console.log("shibidi", result);

        //TODO: fetch 3? random recipies to feature on load

        data.value = result;
        console.log(data.value);
        
    } catch (e) {
        console.error(e);
    } finally {
        loading.value = false;
    }
};

const searchRecipies = async () => {
    console.log(searchTerm.value);
    try {
        const result = (await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm.value}`)).data.meals || [];
        searchData.value = result;
        console.log(searchData.value);
    } catch (e) {
        console.error(e);
    } 
};

// onMounted(fetchRecipie);
</script>

<template>
    <section>
        <h2>Featured</h2>
        <ul>

        </ul>
    </section>
    <section>
        <label for="search-field"><h2>Search</h2></label>
        <span>
            <input v-model="searchTerm" type="text" name="search-field" id="search-field">
            <button @click="searchRecipies" type="button">Search</button>
        </span>
        <ul>
            <RecipiePreview v-for="meal in searchData" 
                :key="meal.idMeal"
                :meal-id="meal.idMeal"
                :meal-name="meal.strMeal"
                :meal-image-u-r-l="meal.strMealThumb"
            />
        </ul>
    </section>
</template>

<style scoped>
ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 4rem;
    padding: 0 10%;
    list-style: none;
}

span {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
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