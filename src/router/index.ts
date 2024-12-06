import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/Home.vue");
const Favorites = () => import("../views/Favorites.vue");
const Recipie = () => import("../views/Recipie.vue");
const NotFound = () => import("../views/NotFound.vue");

const routes = [
    { path: "/", component: Home },
    { path: "/favorites", component: Favorites },
    { path: "/:id", component: Recipie },
    { path: "/:patchMatch(.*)", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;