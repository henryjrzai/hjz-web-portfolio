<script setup>
import { experiences } from '@/data.js'
import Timeline from '@/components/TimelineItem.vue'
document.addEventListener("DOMContentLoaded", function() {
  const title = document.querySelector('#titleExpe');
  const desc = document.querySelector('#descExpe');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated','animate__lightSpeedInRight', 'animate__slow');
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
  const item = document.querySelector('#expeItem');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated','animate__slideInUp', 'animate__slow');
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
  <section id="experience" style="padding: 90px 0 120px 0">
    <div class="container">
      <div class="text-center mb-5">
        <h2 id="titleExpe" class="poppins-bold">Experience 💻</h2>
        <p id="descExpe" class="poppins-regular">Some of the work and study that I do</p>
      </div>
      <div id="expeItem" class="container-line">
        <Timeline
          v-for="experience in experiences"
          :key="experience.id"
          :data="experience"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
#experience {
  background: rgb(233,241,253);
  background: linear-gradient(0deg, rgba(233,241,253,1) 0%, rgba(255,255,255,1) 100%);
}

.container-line {
  width: 80%;
  padding: 50px 0;
  margin: 50px auto;
  position: relative;
  overflow: hidden;
}

.container-line:before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1px;
  width: 2px;
  height: 100%;
  background: #CCD1D9;
  z-index: 1
}

@media screen and (max-width: 768px) {
  .container-line:before {
    left: 8px;
    width: 2px;
  }
}
</style>