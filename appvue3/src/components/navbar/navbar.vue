<template>
    <div id="nav">
    <router-link to="/">Cadastro</router-link> 
    <router-link to="/viewuser">viewuser</router-link>
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
    background-color: #171717;
    border-bottom: 5px solid #d1c748;

    
}
a{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  color: #d1c748;
  list-style: none;
  text-decoration: none;
}
a:hover{
  color: white;
}
</style>

