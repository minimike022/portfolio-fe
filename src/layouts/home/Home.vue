<script setup>
import Download from '../../components/buttons/Download.vue';
</script>
<template>
    <div class="flex my-16">
        <div class="flex flex-col justify-between py-12 mr-8">
            <img src="/src/assets/githubLogo.svg" alt="" class="w-[24px]">
            <img src="/src/assets/twitterLogo.svg" alt="" class="w-[24px]">
            <img src="/src/assets/facebookLogo.svg" alt="" class="w-[24px]">
            <img src="/src/assets/linkedinLogo.svg" alt="" class="w-[24px]">
        </div>
        <div class="flex flex-col text-white">
            <h1 class="text-primary text-2xl my-2">Hi my name is</h1>
            <h1 class="text-primary font-bold text-4xl my-2">Michael Eduardo Jr</h1>
            <div class="flex my-2">
                <h1 class="text-sm font-bold mr-4">Full Stack Web Developer</h1>
                <h1 class="text-sm font-bold mr-4">Software Engineer</h1>
                <h1 class="text-sm font-bold mr-4">UI/UX Designer</h1>
            </div>
            <h1 class="text-lg my-2 text-gray-200">
                I'm a passionate <span class="text-primary font-bold">Software Engineer</span> specialize in building
                creative
                <br>and responsive modern application
            </h1>

            <Download class="my-2" />
        </div>
    </div>
</template>