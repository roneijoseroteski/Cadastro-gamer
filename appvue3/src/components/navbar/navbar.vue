<template>
    <div id="nav">
    <router-link to="/">Cadastro</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
 name:'navbar'
}
</script>

<style scoped>

#nav {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    max-width: 100%;
    max-height: 80px;
    background-color: rgb(17, 16, 16);
    border-bottom: 5px solid gold;

    
}
a{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  color: gold;
  list-style: none;
  text-decoration: none;
}
a:hover{
  color: white;
}
</style>

