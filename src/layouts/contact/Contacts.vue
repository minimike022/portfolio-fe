<script setup>
import ContactForms from '/src/components/ContactForms.vue'
</script>
<template>
    <div id="contactUs" class="h-10"></div>
    <div class="flex justify-between px-[25dvh] mb-12 mt-[13dvh]">
        <div class="mt-10">
            <h1 class="text-5xl text-white font-bold mt-2">Let’s <span class="text-[#76C79B]">CHAT.</span></h1>
            <h1 class="text-5xl text-white font-bold mt-2">Tell me about your</h1>
            <h1 class="text-5xl text-white font-bold mt-2">project.</h1>
            <h2 class="text-white text-xl mt-4">Let’s build something <span class="text-[#76C79B] font-bold">CREATIVE</span>
                <br>together🤝</h2>
        </div>
        <ContactForms />
    </div>

</template>