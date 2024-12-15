<script setup lang="ts">
import { inject } from 'vue';
import { RouterView, RouterLink, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { AuthStore } from './stores/auth';

const authStore = inject("authStore") as AuthStore;
const { toggle } = authStore;
const { auth } = storeToRefs(authStore);

const router = useRouter();

const sign = () => {
  if(auth && router.currentRoute.value.fullPath == "/favorites") {
    console.error("You must be signed in to access favorites!");
    router.push({ path: "/" });
  }

  toggle();
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"><h1>Munchly</h1></RouterLink>
      <ul>
        <li><RouterLink to="/favorites"><button type="button">Favorites</button></RouterLink></li>
        <li><button type="button" @click="sign">{{ auth ? "Sign out" : "Sign in" }}</button></li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
}
</style>
