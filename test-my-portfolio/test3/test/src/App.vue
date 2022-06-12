<!-- ./src/App.vue -->
<template>
  <div id="my-portfolio">
    <Header />
    <div class="main">
      <router-view />      
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import './assets/scss/_base';
@import './assets/scss/reset';
#my-portfolio {
  height: 100%;
}
.main {
  height: 100%;
}
</style>
