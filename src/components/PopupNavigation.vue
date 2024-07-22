<script setup>
import { useStore } from '.././util/NavigationPanel';

const store = useStore()

console.log(store.mobile_nav)
</script>
<template>
    <div :class="{ 'w-[12em] px-6': store.mobile_nav == true }" class="transform duration-300 fixed w-0 h-screen top-0 right-0 z-[9999] bg-black text-white 
    flex flex-col
    ">
        <div class="my-4">
            <img src="/src/assets/x.svg" alt="" @click="store.mobile_nav = false">
        </div>
        <a href="#" class="my-4">Home</a>
        <a href="#about" class="my-4">About</a>
        <a href="#projects" class="my-4">Projects</a>
        <a href="#contacts" class="my-4">Contact Us</a>
        <div class="flex flex-col my-4">
            <h1>Follow Us</h1>
            <div class="w-full flex justify-between my-4">
                <a href="https://github.com/minimike022"><img
                        src="/src/assets/socialLogo/githubLogo.svg" alt="" class="w-[24px]"></a>
                <a href="https://x.com/mikejr022"><img
                        src="/src/assets/socialLogo/twitterLogo.svg" alt="" class="w-[24px]"></a>
                <a href="https://www.facebook.com/MichaelJr022/"><img
                        src="/src/assets/socialLogo/facebookLogo.svg" alt="" class="w-[24px]"></a>
                <a href="https://www.linkedin.com/in/michael-jr-eduardo-190b6928b/"><img src="/src/assets/socialLogo/linkedinLogo.svg"
                        alt="" class="w-[24px]"></a>
            </div>
        </div>
    </div>
</template>