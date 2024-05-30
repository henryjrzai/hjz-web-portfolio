<script setup>
import StackItem from "@/components/StackItem.vue";
import { stack } from "../../data.js";
document.addEventListener("DOMContentLoaded", function() {
  const title = document.querySelector('#titleStack');
  const desc = document.querySelector('#descStack');

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
  const item = document.querySelector('#stackItem');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated','animate__bounce');
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
  <section id="stacks" class="" style="padding: 80px 0 90px 0">
    <div class="container">
      <div class="text-center">
        <h2 class="poppins-bold" id="titleStack">Tech Stack 🚀</h2>
        <p class="poppins-regular" id="descStack">stacks that I use in all my development</p>
      </div>
      <div id="stackItem" class="row gap-3 d-flex justify-content-center" style="margin-top: 70px">
        <StackItem
          v-for="item in stack"
          :key="item.id"
          :stack="item"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 768px) {
  #stacks {
    height: 100vh;
  }
}
</style>