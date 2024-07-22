<script setup>
import { ref } from 'vue'

const projects = ref([
    { itch: "", github: "https://github.com/minimike022/FogponicsFinal", title: "Automated IoT Based Fogponics System", description: "Built a system that controls fogponics system with 3 functionality modes Automatically, Schedulled, or Manually Control the said system", role: "Team Lead", language: ["HTML", "CSS", "PHP", "Tailwind", "Laravel", "MySQL"] },
    { itch: "", github: "", title: "Vaccine Management System", description: "Built a system during covid-19 to facilitate information of a person regarding his/her vaccine data", role: "Team Lead", language: ["HTML", "CSS", "PHP", "MySQL"] },
    { itch: "https://minimike.itch.io/cubewars", github: "", title: "Cube Wars", description: "Fight alongside with yourself to destroy all this evil cubes that tries to execute you", role: "Team Lead", language: ["C#", "Unity"] },
])


</script>
<template>
    
    <div class="flex px-10 py-8 md:mx-0 md:justify-center relative">
        <div id="projects" class="absolute h-10 top-[-13dvh]"></div>
        <div>
            <div class="flex items-center">
                <h1 class="text-primary text-3xl lg:text-5xl font-bold">Projects</h1>
                <div class="ml-4 w-full h-[.4dvh] bg-[#8E8E8E]"></div>
            </div>
            <div class="grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-5 my-8">
                <div v-for="proj in projects"
                    class="w-full md:w-[50dvh] text-sm text-white bg-[#15273E] p-4 rounded-md relative hover:scale-105">
                    <div class="absolute flex left-0 px-4">
                        <a v-if="proj.github !== ''" :href="proj.github"><img
                                src="/src/assets/socialLogo/githubLogo.svg" alt="" class="w-[24px]"></a>
                        <a v-if="proj.itch !== ''" :href="proj.itch" class="ml-2"><img
                                src="/src/assets/socialLogo/playLogo.svg" alt=""></a>
                    </div>
                    <h1 class="font-bold my-2 mt-10">{{ proj.title }}</h1>
                    <h1 class="text-[#8E8E8E] my-2">{{ proj.description }}</h1>
                    <h1 class="text-white my-2">{{ proj.role }}</h1>
                    <div class="flex flex-wrap text-[#8E8E8E] text-xs my-2">
                        <h1 v-for="lang in proj.language" class="mr-6 my-[2px]">{{ lang }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>