<script setup>
import ProjectItem from "@/components/ProjectItem.vue";
import { projects } from "@/data";
document.addEventListener("DOMContentLoaded", function() {
  const title = document.querySelector('#titleProject');
  const desc = document.querySelector('#descProject');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated','animate__lightSpeedInLeft', 'animate__slow');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(title);
  observer.observe(desc);
});
document.addEventListener("DOMContentLoaded", function() {
  const item = document.querySelector('#proItem');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated','animate__fadeInUp', 'animate__slow');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(item);
});
</script>

<template>
  <section id="projects" style="padding: 90px 0 120px 0">
    <div class="container">
      <div class="text-center">
        <h2 id="titleProject" class="poppins-bold">Projects 👾</h2>
        <p id="descProject" class="poppins-regular">Some of my latest projects</p>
      </div>
      <div id="proItem" class="mt-5 row d-flex gap-3 mx-2 justify-content-around">
        <ProjectItem
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>