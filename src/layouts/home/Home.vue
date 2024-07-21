<script setup>
import {ref} from 'vue'
import Download from '../../components/buttons/Download.vue';
import TypeWritter from '../../components/TypeWritter.vue';

const texts = ref(
    ["Full Stack Web Developer" , "Software Engineer", "UI/UX Designer"]
)


</script>
<template>
    
    <div class="flex my-28">
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