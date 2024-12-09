<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const loading = ref(false);
const data = ref<any>(null);

const fetchRecipie = async () => {
    loading.value = true;

    try {
        const result = (await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`)).data.meals;
        if(!result) throw "404";

        data.value = result[0];
    } catch (e) {
        router.push({ path: "error/404" }); //TODO: this is surely scuffed, but im tired...
    } finally {
        loading.value = false;
    }
};

const addToFavorites = () => {
    // data.value.idMeal
};

onMounted(fetchRecipie);
</script>

<template>
    <template v-if="loading">
        {{ "Loading recipie..." }}
    </template>
    <template v-else-if="data">
        <article>
            <div>
                <span>
                    <h2>{{ data?.strMeal }}</h2>
                    <p>{{ "| " + data?.strCategory }}</p>
                </span>
                <img :src="data?.strMealThumb" :alt="data?.strMeal">
                <span>
                    <a :href="data?.strSource" target="_blank" rel="noopener noreferrer"><button type="button">Recipie source</button></a>
                    <button @click="addToFavorites" type="button">Add to favorites</button>
                </span>
            </div>
            <div>
                <h2>Ingredient list</h2>
                <ul>
                    <li v-if="data?.strIngredient1">{{ data?.strIngredient1 + ", " + data?.strMeasure1 }}</li>
                    <li v-if="data?.strIngredient2">{{ data?.strIngredient2 + ", " + data?.strMeasure2 }}</li>
                    <li v-if="data?.strIngredient3">{{ data?.strIngredient3 + ", " + data?.strMeasure3 }}</li>
                    <li v-if="data?.strIngredient4">{{ data?.strIngredient4 + ", " + data?.strMeasure4 }}</li>
                    <li v-if="data?.strIngredient5">{{ data?.strIngredient5 + ", " + data?.strMeasure5 }}</li>
                    <li v-if="data?.strIngredient6">{{ data?.strIngredient6 + ", " + data?.strMeasure6 }}</li>
                    <li v-if="data?.strIngredient7">{{ data?.strIngredient7 + ", " + data?.strMeasure7 }}</li>
                    <li v-if="data?.strIngredient8">{{ data?.strIngredient8 + ", " + data?.strMeasure8 }}</li>
                    <li v-if="data?.strIngredient9">{{ data?.strIngredient9 + ", " + data?.strMeasure9 }}</li>
                    <li v-if="data?.strIngredient10">{{ data?.strIngredient10 + ", " + data?.strMeasure10 }}</li>
                    <li v-if="data?.strIngredient11">{{ data?.strIngredient11 + ", " + data?.strMeasure11 }}</li>
                    <li v-if="data?.strIngredient12">{{ data?.strIngredient12 + ", " + data?.strMeasure12 }}</li>
                    <li v-if="data?.strIngredient13">{{ data?.strIngredient13 + ", " + data?.strMeasure13 }}</li>
                    <li v-if="data?.strIngredient14">{{ data?.strIngredient14 + ", " + data?.strMeasure14 }}</li>
                    <li v-if="data?.strIngredient15">{{ data?.strIngredient15 + ", " + data?.strMeasure15 }}</li>
                    <li v-if="data?.strIngredient16">{{ data?.strIngredient16 + ", " + data?.strMeasure16 }}</li>
                    <li v-if="data?.strIngredient17">{{ data?.strIngredient17 + ", " + data?.strMeasure17 }}</li>
                    <li v-if="data?.strIngredient18">{{ data?.strIngredient18 + ", " + data?.strMeasure18 }}</li>
                    <li v-if="data?.strIngredient19">{{ data?.strIngredient19 + ", " + data?.strMeasure19 }}</li>
                    <li v-if="data?.strIngredient20">{{ data?.strIngredient20 + ", " + data?.strMeasure20 }}</li>
                </ul>
            </div>
        </article>
    </template>
</template>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

article div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

img {
    width: 70%;
    border: 2px solid white;
    border-radius: 2rem;
}

span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style-type: square;
}

@media (min-width: 768px) {
    article {
        flex-direction: row;
    }

    article div {
        width: 40%;
    }
}
</style>