<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import Navigation from '../layouts/navigation/Navigation.vue';


const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})


</script>

<template>
    <div :class="{'drop-shadow-md bg-[#050d16]': isScrolled}" class="transition duration-300 ease-in-out fixed w-screen top-0 flex items-center justify-between px-12 py-4  z-[999] scroll-smooth">
        <h1 class="text-primary text-2xl font-bold">Solo Dev/></h1>
        <Navigation/>
    </div>
</template>