<script setup>
import About from './views/About.vue';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';
import Navigation from './layouts/navigation/Navigation.vue';
</script>


<template>
  <div>
    <Navigation/>
    <div>
      <Home id="home"/>
      <Projects id="project"/>
      <About id="about"/>
      <Contact id="contact"/>
    </div>
  </div>

</template>
