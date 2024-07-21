<script setup>
import PopupNavigation from '../../components/PopupNavigation.vue';
</script>

<template>
    <div class="flex md:hidden">
        <img src="/src/assets/menu.svg" alt="" class="w-[32px]">
    </div>
    <div class=" items-center justify-between w-[60dvh] hidden md:flex">
        <a href="#" class="text-[#8E8E8E] hover:text-primary">Home</a>
        <a href="#about" class=" text-[#8E8E8E] hover:text-primary">About</a>
        <a href="#projects" class=" text-[#8E8E8E] hover:text-primary">Project</a>
        <a href="#contactUs"
            class="transition duration-300 ease-in-out cursor-pointer w-auto border text-primary border-primary rounded-md text-center px-6 py-[1dvh] hover:text-white hover:bg-primary">
            <h1>Contact</h1>
        </a>
    </div>
</template>