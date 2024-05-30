<script setup>
import CardService from '../../components/ServiceItem.vue'
import { services } from '@/data'
document.addEventListener("DOMContentLoaded", function() {
  const title = document.querySelector('#title');
  const desc = document.querySelector('#desc');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated','animate__lightSpeedInLeft', 'animate__slow');
        item.classList.add('animate__animated','animate__bounceIn', 'animate__slow');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(title);
  observer.observe(desc);
});

document.addEventListener("DOMContentLoaded", function(){
  const item = document.querySelector('#serviceItem');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated','animate__fadeIn', 'animate__slow');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  observer.observe(item);
})
</script>

<template>
  <section id="services" style="padding: 80px 0 90px 0">
    <div class="container">
      <div class="text-center">
        <h2 id="title" class="poppins-bold">Services 👨‍💻</h2>
        <p id="desc" class="poppins-regular" ref="p">What I Offer</p>
      </div>
      <div id="serviceItem" class="row d-flex justify-content-center gap-5 mx-3">
        <CardService v-for="item in services" :key="item.id" :data="item" />
      </div>
    </div>
  </section>
</template>

<style scoped>
#services {
  background: rgb(233, 241, 253);
  background: linear-gradient(180deg, rgba(233, 241, 253, 1) 0%, rgba(255, 255, 255, 1) 100%);
}
</style>
