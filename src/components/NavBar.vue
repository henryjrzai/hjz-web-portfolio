<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const myNav = ref(null);

onMounted(() => {
  const handleScroll = () => {
    if (window.scrollY >= 200) {
      myNav.value.classList.add("bg-white", "shadow-sm", "animate__animated", "animate__fadeIn");
      myNav.value.classList.remove("bg-transparent");
    } else {
      myNav.value.classList.add("bg-transparent");
      myNav.value.classList.remove("bg-white", "shadow-sm");
    }
  };

  window.addEventListener('scroll', handleScroll);

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
  <div class="container-fluid fixed-top bg-transparent" ref="myNav" style="z-index: 9999;">
    <nav class="navbar navbar-expand-lg py-2" role="navigation">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/Logohjz.svg" alt="hjz" height="50">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
            <li class="nav-item">
              <a class="nav-link poppins-regular active fs-6 mx-2" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link poppins-regular fs-6 mx-2" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link poppins-regular fs-6 mx-2" href="#stacks">Tech Stack</a>
            </li>
            <li class="nav-item">
              <a class="nav-link poppins-regular fs-6 mx-2" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link poppins-regular fs-6 mx-2" href="#experience">Experience</a>
            </li>
          </ul>
          <div class="d-flex justify-content-center align-items-center rounded-pill btn-gradient-primary" style="width: 50px;height: 30px">
            <a href="https://github.com/henryjrzai" target="_blank"><i class="fa-brands fa-github text-white"></i></a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
</style>