import { defineStore } from "pinia"
import { ref } from "vue";

export const useFavoritesStore = defineStore("favorites", () => {
    const favorites = ref<any[]>([]);
    
    const push = (id: string, name: string, imageURL: string) => {
        favorites.value.push({id, name, imageURL});
    }

    const pull = (id: string) => {        
        favorites.value = favorites.value.filter(favorite => favorite.id != id);
    }

    return { favorites, push, pull };
});