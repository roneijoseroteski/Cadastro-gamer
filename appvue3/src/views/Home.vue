<template>
  <div class="home">
    <h1 class="title">Cadastro de Jogador</h1>
    <!-- <div class="lista">

      <ul>
        <li v-for="User in lista" :key="User.user_ID">{{User.name_user_full}}</li>
      </ul> 
    </div> -->
    <div class="formulario">
      <form id="form" @submit.prevent="register()">
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
          <input type="date" id="birthday_user" name="birthday_user" v-model="values.birthday_user" required>
        </div>
        <div class="input-container">
          <label for="e_mail_user">E mail :</label>
          <input type="text" id="e_mail_user" name="e_mail_user" v-model="values.e_mail" required >
        </div>
        <div class="input-container">
          <label for="password_user">Senha :</label>
          <input type="text" id="password_user" name="password_user" pattern="[A-Za-z0-9._%+-@]{6,12}[!-?]{1,}" v-model="values.password_user" required >
        </div>
        <div class="input-container">
          <label for="sexo_for_user">Qual seu gênero</label>
        </div>
        <div class="input-container-genero">
          <input type="radio" id="generomale" name="genero-male" value="Masculino" v-model="values.genero_user"/> <label for="Masculino">Masculino</label>
          <input type="radio" id="genero-female" name="genero-female" value="Feminino" v-model="values.genero_user"/> <label for="Feminino">Feminino</label>
        </div>
        <div v-if="!this.values.isEditing" id="btn-container"><button id="btn-register" type="submit" placeholder="Register">Register</button></div>
        <div v-else class="btn-container-editing">
          <button class="btn-editing" type="submit" placeholder="Salvar">Salvar</button>
          <button class="btn-editing" type="submit" @click="calcelEditing()" placeholder="Cancelar">Cancelar</button>
        </div>
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
        id: null,
        name_user_full: null,
        name_user: null,
        birthday_user: null,
        e_mail: null,
        password_user: null,
        genero_user: null,
        isEditing: true
      },
    }
  },
 mounted(){
    
    // console.log(this.$route.params.values)
    // apos a instancia ter sido criada
    User.listar().then(resposta => {
      // console.log(resposta.data.user)
      this.lista = resposta.data.user
    }),
    this.getUsers();

  }
  ,
  created(){
    this.editProfileuser(); 
  },
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
    if(this.isEditing === false){
      this.$moment(this.values.birthday_user).format('DD-MM-YYYY')
      // let data = this.values.birthday_user.$moment().format('dddd');  
       User.salvar(this.values).then( response => {
         alert('salvo com sucesso')
       })
       this.values = {};

    }else {
      this.updateuserprofile()
    }

  },
   editProfileuser(){
    
    this.values=  {
        id: this.$route.params.id,
        name_user_full: this.$route.params.name_user_full,
        name_user: this.$route.params.name_user,
        birthday_user: this.$route.params.birthday_user,
        e_mail: this.$route.params.e_mail,
        password_user: this.$route.params.password_user,
        genero_user: this.$route.params.genero_user,
        isEditing : this.$route.params.isEditing
      },
      console.log(this.$route.params.genero_user +'and ' + this.values.isEditing)
  },
  calcelEditing(){
    this.values = {};
    this.isEditing = true;
    this.$router.push('viewuser')
  },
  updateuserprofile() {
    const date= {
        id: this.values.id,
        name_user_full: this.values.name_user_full,
        name_user: this.values.name_user,
        birthday_user: this.values.birthday_user,
        e_mail: this.values.e_mail,
        password_user: this.values.password_user,
        genero_user: this.values.genero_user
    }
    console.log('modificando ' + date.name_user_full)
    // User.atualizar(this.values).then(response => {
    //   alert('atualizado')
    // })
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
  min-height: 250px;

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
#btn-container{
  width: 600px;
  display: flex;
  justify-content: flex-end;

}
.btn-container-editing{
  width: 600px;
  display: flex;
  justify-content: flex-end;

}
#btn-register {
  border-radius: 10px;
  width: 20%;
  padding: 1%;
  display: flex;
  justify-content: center;
  background-color:  rgb(17, 16, 16);
  font-weight: bold;
  color: gold;
  border-color: gold;


}
.btn-editing {
  border-radius: 10px;
  width: 20%;
  padding: 1%;
  display: flex;
  justify-content: center;
  background-color:  rgb(17, 16, 16);
  font-weight: bold;
  color: gold;
  border-color: gold;
  margin-left: 2%;
}

 #btn-register:hover{

  background-color: white;
} 
</style>
