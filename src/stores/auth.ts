import { defineStore } from "pinia"
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => { //Represents user login authentication
    const auth = ref<boolean>(false);
    
    const toggle = () => {
        auth.value = !auth.value;
    }

    return { auth, toggle };
});

export type AuthStore = ReturnType<typeof useAuthStore>;