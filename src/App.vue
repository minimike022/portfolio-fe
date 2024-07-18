<script setup>
import About from './views/About.vue';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';
import Navigation from './layouts/navigation/Navigation.vue';
import Socials from './layouts/socials/Socials.vue';
</script>


<template>
  <div class="font-">
    <Navigation/>
    <div class="px-32">
      <Home id="home"/>
      <Projects id="project"/>
      <About id="about"/>
      <Contact id="contact"/>
    </div>
    <div class="absolute w-screen bottom-0 flex justify-between px-8 pointer-events-none">
      <Socials/>
    </div>
  </div>

</template>
