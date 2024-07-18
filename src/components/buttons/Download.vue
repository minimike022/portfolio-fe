<script setup>

const download_cv = () => {
    console.log("Clicked!")
}
</script>

<template>
    <div class="w-[25dvh] border border-primary py-2 rounded-md text-center" @click="download_cv()">
        <h1 class="text-primary">Download CV</h1>
    </div>
</template>