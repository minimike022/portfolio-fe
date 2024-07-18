<script setup>

const download_cv = () => {
    console.log("Clicked!")
}
</script>

<template>
    <div class="w-auto" @click="download_cv()">
        <h1 class="border border-primary py-2 px-4">Download CV</h1>
    </div>
</template>