<script>
export default {
  props : [
    'project'
  ]
}
</script>

<template>
  <div class="col-md-4 border border-1 shadow-sm bg-white rounded-3">
    <img :src="project.thumbnail" class="card-img-top mt-2" :alt="project.name">
    <div class="card-body d-flex justify-content-between mt-2 mx-2">
      <p class="card-text poppins-semibold fs-6"><a :href="project.link" style="text-decoration: none">{{ project.name }}</a> </p>
      <a :href="project.github" target="_blank" class="nav-link card-text"><i class="fa-brands fa-github"></i></a>
    </div>
  </div>
</template>

<style scoped>

</style>