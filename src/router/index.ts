import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
import { storeToRefs } from "pinia";
const Home = () => import("../views/Home.vue");
const Favorites = () => import("../views/Favorites.vue");
const Recipie = () => import("../views/Recipie.vue");
const NotFound = () => import("../views/NotFound.vue");

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/favorites", component: Favorites, beforeEnter: (/*to, from*/) => {
        const authStore = useAuthStore();
        const { auth } = storeToRefs(authStore);
        
        if(!auth.value) {
            console.error("You must be signed in to access favorites!");
            return { path: "/" };
        }
    } },
    { path: "/:id", component: Recipie },
    { path: "/:patchMatch(.*)", name: "404", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;