<script>
import { onMounted, onUnmounted, ref } from 'vue'

let observer
const cardServ = ref(null)

onMounted(() => {
  const options = {
    rootMargin: '1px',
    threshold: 0.1
  }

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      cardServ.value.classList.add('animate__animated','animate__bounceIn')
    } else {
      cardServ.value.classList.remove('animate__animated','animate__bounceIn')
    }
  }, options)

  if (cardServ.value) {
    observer.observe(cardServ.value)
  }
})

onUnmounted(() => {
  if (cardServ.value) {
    observer.unobserve(cardServ.value)
  }
})

export default {
  props: ['data']
}
</script>

<template>
  <div

    class="col-10 col-md-3 border border-1 rounded-1 shadow-sm px-4 pb-3 bg-white" ref="cardServ"
    style="height: 250px"
  >
    <i :class="[data.icon, 'fs-4', 'text-primary-gradient']" style="margin-top: 110px"></i>
    <p class="mt-3 poppins-medium">{{ data.title }}</p>
    <p class="poppins-reguler fs-6" style="color: #146cf0">
      View more<i class="fa-solid fa-caret-right ms-3"></i>
    </p>
  </div>
</template>

<style scoped></style>
