<template>
<div class="container">
  <Navbar />
  <router-view />
  <Footer/>
</div>
</template>
<script>
import Navbar from './components/navbar/navbar.vue';
import Footer from './components/footer/footer.vue'
export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  },

}
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 auto;
  padding: 0;
}
.container {
  max-width: 100%;
  margin: 0 auto;

  
}


</style>
