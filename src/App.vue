<script setup>
import AboutView from './views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ContactView from './views/ContactView.vue';
import HeaderView from './views/HeaderView.vue';

</script>


<template>
  <div class="font-">
    <HeaderView/>
    <div class="px-20">
      <HomeView id="home"/>
      <ProjectsView id="project"/>
      <AboutView id="about"/>
      <ContactView id="contact"/>
    </div>
    
  </div>

</template>
