<script setup>

</script>

<template>
  <section id="hero" class="container-fluid min-vh-100">
    <div class="container ">
      <div id="heroSection" class="row animate__animated animate__fadeIn">
        <div id="heroText" class="col-lg-6 ps-md-5 d-flex justify-content-center ">
          <div class="w-md-75 ps-md-5">
            <h5 class="poppins-semibold animate__animated animate__jackInTheBox">HI FOLKS 👋</h5>
            <h1 class="poppins-bold animate__animated animate__backInLeft">I’m Henry Jr Zai</h1>
            <h1 class="poppins-bold animate__animated animate__backInLeft" style="animation-duration: 2s;" id="job">Jr. Software Engineer</h1>
            <p class="poppins-regular w-md-75 lh-lg animate__animated animate__backInLeft" style="animation-duration: 3s;">A happy full-stack developer always wants to explore new things to hone skills</p>
            <button class="btn btn-gradient-primary text-white poppins-regular px-5 py-3 rounded-pill animate__animated animate__backInLeft" style="animation-duration: 4s;">
              <a href="https://www.cakeresume.com/henry-junior-zai" target="_blank" class="text-decoration-none text-white">Download CV</a></button>
          </div>
        </div>
        <div class="col-lg-6 ps-md-5 d-flex justify-content-center pt-5 pt-lg-0">
          <img src="../../assets/images/heroimage2.png" class="img-fluid w-75 animate__animated animate__bounceInRight" style="animation-duration: 4s;">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  background: rgb(57,132,244);
  background: linear-gradient(170deg, rgba(57,132,244,0.1) 0%, rgba(12,211,255,0.1) 37%, rgba(47,124,240,0.1) 78%, rgba(14,101,232,0.1) 100%);
}

#heroText {
  background-image: url("../../assets/images/background/hero-text.png");
  background-size: contain;
  background-repeat: no-repeat;
}

#job {
  color: #3984f4;
  background-image: -webkit-linear-gradient(315deg, #3984f4 0%, #0cd3ff 37%, #2f7cf0 78%, #0e65e8 100%);
  background-clip: text;
    -webkit-background-clip: text; 
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
}

#heroSection {
  padding-top: 130px;
}

@media (min-width: 768px) {
  #heroSection {
    padding-top: 150px;
  }
}

@media (min-width: 992px) {
  #heroSection {
    padding-top: 200px;
  }
}
</style>