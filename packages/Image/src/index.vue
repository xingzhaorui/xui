<template>
  <div class="container">
    <img class="img" :src="src" :alt="alt" />
    <div v-if="desc" class="pic-info"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "x-image",
  props: {
    src: String,
    alt: String,
    desc: Boolean
  },
  mounted() {
    console.log(this.src, this.desc);
  },
};
</script>

<style>
.container {
  display: inline-block;
  position: relative;
  overflow: hidden;
  animation: fadeInOut 3s linear 0s 1 normal;
}
.pic-info {
  display: inline-block;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  left: 0;
  bottom: -100px;
  transition: all 700ms ease;
  text-align: center;
}

.container:hover .pic-info {
  bottom: 0px;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.75;
  }
  75% {
    opacity: 1;
  }
}

@keyframes ringing {
  from {
    transform: rotate(-30deg);
  }
  to {
    transform: rotate(30deg);
  }
}
</style>