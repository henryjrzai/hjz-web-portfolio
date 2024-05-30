<script>
export default {
  props : [
    'stack'
  ],
  methods: {
    addFilter() {
      const items = document.querySelectorAll('#stackItem');
      items.forEach(item => {
        if (item !== event.target) {
          item.classList.add('filtered');
        }
      });
    },
    removeFilter() {
      const items = document.querySelectorAll('#stackItem');
      items.forEach(item => {
        item.classList.remove('filtered');
      });
    }
  }
}


</script>

<template>
  <div
    class="stack"
    id="stackItem"
    @mouseover="addFilter"
    @mouseout="removeFilter">
      <img
        :src="stack.icon"
        :alt="stack.name"
        class="w-75"
        :style="{ filter: `drop-shadow(5px 5px 30px ${stack.baseColor})` }"
      />
  </div>
</template>

<style scoped>
.stack {
  width: 95px;
  height: 95px;
}

.filtered {
  transition: filter 0.5s ease-in-out;
  filter: brightness(0.5) saturate(0.2) contrast(1.2) blur(10px);
}

@media (min-width: 992px) {
  .stack {
    width: 175px;
    height: 175px;
  }
}
</style>