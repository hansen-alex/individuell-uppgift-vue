<script setup lang="ts">
defineProps({
  mealId: { type: String, required: true },
  mealName: { type: String, required: true },
  mealImageURL: { type: String, required: true }
});
</script>

<template>
  <li>
    <RouterLink :to="`/${mealId}`">
      <h3>{{ mealName }}</h3>
      <img :src="mealImageURL" :alt="mealName">
    </RouterLink>
  </li>
</template>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid white;
  border-radius: 2rem;
}

a { 
  display: flex;
  flex-direction: column;
  
}

h3 {
  margin: 0;
  padding-top: 10%;
}

img {
  max-width: 100%;
  border-radius: 4rem;
  padding: 10%;
}
</style>