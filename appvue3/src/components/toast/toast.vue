<template>
  <div class="container-toast" :style="{ 'background-color': backgroundcolor }">
    <p :style="{ 'color': YOURCOLORVARIABLEHERE }">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name:'message',
  props: {
    msg: String
  },
  data() {
    return {
      YOURCOLORVARIABLEHERE:"green",
      backgroundcolor:"#77DD77",
    }
  }
}
</script>

<style scoped>
.container-toast {
  color: #004085;
  background-color: white;
  border: 2px solid #88DAFF;
  border-radius: 20px;
  padding: 2px;
  max-width: 600px;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-content: center;
}
p {
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  font-weight: bold;
}

</style>