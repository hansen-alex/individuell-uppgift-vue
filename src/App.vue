<script setup lang="ts">
/* TODO Krav
-G:
Det ska vara en Vue applikation [X]
Använda TypeScript [X]
Textinterpolering {{ exempel }} [X]
Villkorlig rendering (v-if) [X]
Listrendering (v-for) [X]
Händelser (v-on eller dess kortform) [X]
Använda computed [X]
v-model [X]
minst två webbsidor med Vue Router [X]
minst en prop ska skickas ned till komponent  [X]
Props ska vara typsäkra. Exempel, ”type: number” [X]
Använda ref() eller data()... för att hantera reactive state [X]
Finnas Lifeycle hook (mounted) [X]
Webbanrop ska göras med fetch eller bibliotek för att hämta och visa data [X]

-VG:
Applikationen är robust med genomtänkt felhantering och validering [X]
Använda dynamisk route matching för att hämta och visa data för ett specifikt element från webanropet, även vid refresh eller om sidan öppnas i ett nytt fönster (ex: recept.se/sommar-paj) [X]
Lägg till router guards för att blockera användares åtkomst till sida dem inte är behörig till [X]
Hantera sidor som inte finns (404) [X]
Använd provide / inject från root component till valfri child component med default värde som fallback [X]

-Functionality:
Det ska gå att hämta recept från ett api [X]
Visa dem på sidan [X]
Kunna lägga till recept i favoriter [X]
Samt uppfylla kriterier nedan [X]
*/
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
