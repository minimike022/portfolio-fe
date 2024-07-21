<script setup>
import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ContactView from './views/ContactView.vue';
import HeaderView from './views/HeaderView.vue';
import Socials from './layouts/socials/Socials.vue';
</script>


<template>
  <div class="font-Poppins">
    <HeaderView/>
    <div class="">
      <HomeView id="home"/>
      <AboutView id="about"/>
      <ProjectsView id="project"/>
      <ContactView id="contact"/>
    </div>
  </div>
  <Socials class="hidden md:flex"/>
</template>
