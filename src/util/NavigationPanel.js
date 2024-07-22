import { defineStore } from "pinia";
import {ref} from 'vue'

export const useStore = defineStore('main', () => {
    const mobile_nav = ref(false)

    return {
        mobile_nav,
    }
})