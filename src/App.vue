<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";

* {
  font-family: 'Roboto Mono', monospace;
}

#app {
  padding-bottom: 5rem;
}
</style>
