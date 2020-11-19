<template>
  <div id="app">
    <x-button type="primary">button</x-button>
    <x-image :src="src" :desc="true">这是vue的logo</x-image>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      src: require('./assets/logo.png')
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>