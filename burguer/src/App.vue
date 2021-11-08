<template>
  <Navbar :logo="logo_src" :alt="app_name" />
  <RouterView />
  <Footer />
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar, Footer
  },
  data() {
    return {
      app_name: 'Burger',
      logo_src: './images/logo.png'
    }
  }
}
</script>

<style>
  * {
    font-family: Arial, Helvetica, sans-serif;
    border: 0px;
    padding: 0px;
    margin: 0px;
  }
</style>
