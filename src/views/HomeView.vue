<script setup>
import Home from '../layouts/home/Home.vue';
import Socials from '../layouts/socials/Socials.vue';
import {ref} from 'vue'

const test = ref({
  name: "Michael",
  age: 22
})

console.log(typeof(test.value.name) + " " + test.value.name)
console.log(typeof(test.value.age) + " " + test.value.age)
</script>
<template>
    <Home/>
    <div class="absolute bottom-15 right-0 flex items-center pointer-events-none">
      <Socials/>
    </div>
</template>