<template>
  <div class="home">
    <h1 class="title">Cadastro de Jogador</h1>
    <div class="lista">

      <ul>
        <li v-for="User in lista" :key="User.user_ID">{{User.name_user_full}}</li>
      </ul> 
    </div>
    <div class="formulario">
      <form id="form" @submit="register()">
        <div class="input-container">
          <label for="name_user_Full"> Nome completo jogador :</label>
          <input type="text" id="name_user_full" name="name_user_full" v-model="values.name_user_full" required >
        </div>
        <div class="input-container">
          <label for="name_user">Nome do Usuario :</label>
          <input type="text" id="name_user" name="name_user" v-model="values.name_user" required>
        </div>
        <div class="input-container">
          <label for="birthday_user">Data de Aniversário :</label>
          <input type="date" id="birthday_user" name="birthday_user" required>
        </div>
        <div class="input-container">
          <label for="e_mail_user">E mail :</label>
          <input type="text" id="e_mail_user" name="e_mail_user" required >
        </div>
        <div class="input-container">
          <label for="password_user">Senha :</label>
          <input type="text" id="password_user" name="password_user" pattern="[A-Za-z0-9._%+-@]{6,12}[!-?]{1}" required >
        </div>
        <div class="input-container">
          <label for="sexo_for_user">Qual seu gênero</label>
        </div>
        <div class="input-container-genero">
          <input type="radio" id="generomale" name="genero-male" value="Masculino" v-model="values.genero_user"/> <label for="Masculino">Masculino</label>
          <input type="radio" id="genero-female" name="genero-female" value="Feminino" v-model="values.genero_user"/> <label for="Feminino">Feminino</label>
        </div>
        <div class="btn-container"><button class="btn" type="submit" placeholder="Register">Register</button></div>
      </form>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import User from '../servicos/users'
export default {
  name: 'Home',
  components: {

  },
    data(){
    return {
      lista:[],
      values: {
        name_user_full: null,
        name_user: null,
        birthday_user: null,
        e_mail_user: null,
        password_user: null,
        genero_user: null
      }
    }
  },
 mounted(){
    // 
    // apos a instancia ter sido criada
    User.listar().then(resposta => {
      // console.log(resposta.data.user)
      this.lista = resposta.data.user
    }),
    this.getUsers();

  }
  ,
  methods:{
       getUsers() {
       User.listar().then(response => {
         
      // console.log(response.data.user)
       })
      // console.log(" ronei" + this.lista + req.json())
      
      

    
    // const req = await fetch("http://localhost:3000/Users");

    // const data = await req.json();
    // console.log(data.user);
    // console.log(" oi" + this.lista)
    // this.lista = data.user;
    // this.lista.forEach((Element) => {
    //   console.log(Element)
    // })
  },
  register(){
 console.log('registrou')
  }
  }
}
</script>
<style scoped>
body {
    margin: 0 auto!important;
}

.home {
  max-width: 100%;
  margin: 0px auto;
  background-color: rgb(17, 16, 16);

}
.lista{
  display: flex;
  justify-content: center;
}
.title {
  display: flex;
  justify-content: center;
  color: gold;
  padding: 1%;
  margin-block-start: 0;
  margin-block-end: 0;

}
ul {
  display: flex;
  justify-content: center;
  width: 100%;
  color: gold;
}
ul li{
  flex-wrap: wrap;
  list-style: none;
  width: 20%;
}
.formulario{
  max-width: 600px;
  margin: 0 auto;
  padding: 2%;
  
}
label {
  font-weight: bold;
  color: gold;
  padding: 5px 10px;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
}
input{
  border-radius: 5px;
  height: 20px;
  
}
.input-container-genero {
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 2%;
  color: gold;  
  
}
input[type='radio'] { 
  transform: scale(1.5);
   }
.input-container-genero input {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

}
#genero-female {
  margin-left: 2%;
}
.btn-container{
  width: 600px;
  display: flex;
  justify-content: flex-end;

}
.btn {
  border-radius: 10px;
  width: 20%;
  padding: 1%;
  display: flex;
  justify-content: center;
  background-color: rgb(30, 158, 18);
  font-weight: bold;
  color: white;

}
/* .btn:hover{
  
  background-color: white;
} */
</style>
