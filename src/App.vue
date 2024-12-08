<script setup lang="ts">
/* TODO Krav
-G:
Det ska vara en Vue applikation [X]
Använda TypeScript [X]
Använda följande i koden: [ ]
Textinterpolering {{ exempel }} [ ]
Villkorlig rendering (v-if) [X]
Listrendering (v-for) [ ]
Händelser (v-on eller dess kortform) [ ]
Använda computed [ ]
v-model [ ]
minst två webbsidor med Vue Router [X]
minst en prop ska skickas ned till komponent  [ ]
Props ska vara typsäkra. Exempel, ”type: number” [ ]
Använda ref() eller data()... för att hantera reactive state [X]
Finnas Lifeycle hook (mounted) [X]
Webbanrop ska göras med fetch eller bibliotek för att hämta och visa data [X]

-VG:
Applikationen är robust med genomtänkt felhantering och validering [ ]
Använda dynamisk route matching för att hämta och visa data för ett specifikt element från webanropet, även vid refresh eller om sidan öppnas i ett nytt fönster (ex: recept.se/sommar-paj) [X]
Lägg till router guards för att blockera användares åtkomst till sida dem inte är behörig till [ ]
Hantera sidor som inte finns (404) [X]
Använd provide / inject från root component till valfri child component med default värde som fallback [ ]

-Functionality:
Det ska gå att hämta recept från ett api [X]
Visa dem på sidan [X]
Kunna lägga till recept i favoriter [ ]
Samt uppfylla kriterier nedan [ ]
*/
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"><h1>Munchly</h1></RouterLink>
      <ul>
        <RouterLink to="/favorites">Favorites</RouterLink>
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
</style>
