<script setup>
import {ref} from 'vue'
import Download from '../../components/buttons/Download.vue';
import TypeWritter from '../../components/TypeWritter.vue';

const texts = ref(
    ["Full Stack Web Developer" , "Software Engineer", "UI/UX Designer"]
)


</script>
<template>
    
    <div class="flex my-32">
        <div class="flex flex-col justify-between py-8 px-12dvh w-[28px]">
            <a href="https://github.com/minimike022" class="w-[30px] h-[30px]"><img src="/src/assets/socialLogo/githubLogo.svg" alt="" class="w-[24px] hover:scale-125"></a>
            <a href="https://x.com/mikejr022" class="w-[30px] h-[30px]"><img src="/src/assets/socialLogo/twitterLogo.svg" alt="" class="w-[24px] hover:scale-125"></a>
            <a href="https://www.facebook.com/MichaelJr022/" class="w-[30px] h-[30px]"><img src="/src/assets/socialLogo/facebookLogo.svg" alt="" class="w-[24px] hover:scale-125"></a>
            <a href="https://www.linkedin.com/in/michael-jr-eduardo-190b6928b/" class="w-[30px] h-[30px]"><img src="/src/assets/socialLogo/linkedinLogo.svg" alt="" class="w-[24px] hover:scale-125"></a>
        </div>
        <div class="flex flex-col ml-10 text-white">
            <h1 class="text-primary text-2xl my-2">Hi! my name is</h1>
            <h1 class="text-primary font-bold text-4xl my-2">Michael Eduardo Jr</h1>
            <TypeWritter :texts="texts" />
            <h1 class="text-lg my-2 text-gray-200">
                I'm a passionate <span class="text-primary font-bold">Software Engineer</span> specialize in building
                creative
                <br>and responsive modern application
            </h1>

            <Download class="my-2" />
        </div>
    </div>
</template>