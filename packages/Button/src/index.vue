<template>
  <div class="x-button" @click="_alert">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "x-button",
  props: {
    type: String,
  },
  mounted() {
    console.log(this.type)
  },
  methods: {
    _alert() {
      alert(12345)
    }
  }
};
</script>
 
<style scoped>
.x-button {
  display: inline-block;
  padding: 3px 6px;
  background: #000;
  color: #fff;
}
</style>
