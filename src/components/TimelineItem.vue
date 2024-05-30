<script>
export default {
  props: [
    'data'
  ]
}
</script>

<template>
  <div class="timeline-block " :class="data.direction">
    <div class="marker"></div>
    <div class="timeline-content">
      <h3 class="poppins-semibold text-black">{{ data.title}}</h3>
      <span class="poppins-extralight text-black">{{ data.company}} | {{ data.date}}</span>
      <p class="poppins-regular text-black">{{ data.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.timeline-block {
  width: -webkit-calc(50% + 8px);
  width: -moz-calc(50% + 8px);
  width: calc(50% + 8px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  justify-content: space-between;
  clear: both;
}

.timeline-block-right {
  float: right;
}

.timeline-block-left {
  float: left;
  direction: rtl
}

.marker {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #F5F7FA;
  background: rgb(70,142,249);
  background: linear-gradient(-10deg, rgba(70,142,249,1) 0%, rgba(12,102,238,1) 100%);
  margin-top: 10px;
  z-index: 99
}

.timeline-content {
  width: 95%;
  padding: 0 15px;
  color: #666
}

.timeline-content h3 {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 500
}

.timeline-content span {
  font-size: 15px;
  color: #a4a4a4;
}

.timeline-content p {
  font-size: 14px;
  line-height: 1.5em;
  word-spacing: 1px;
  color: #888;
}


@media screen and (max-width: 768px) {
  .container:before {
    left: 8px;
    width: 2px;
  }
  .timeline-block {
    width: 100%;
    margin-bottom: 30px;
  }
  .timeline-block-right {
    float: none;
  }

  .timeline-block-left {
    float: none;
    direction: ltr;
  }
}

</style>