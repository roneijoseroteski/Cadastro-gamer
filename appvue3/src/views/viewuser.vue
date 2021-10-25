<template>
  <div class="container">
    <h1 class="title">Listar Usuarios do Game</h1>  
  <div id="user-table-header">
    <div>Nome completo</div>
    <div>Nome de usuario</div>
    <div>E-mail</div>
    <div>Genero</div>
    <div>Aniversario</div>
    <div class="action">Ações</div>
  </div>
    <div id="user-table-rows">
      <div class="user-table-row" v-for="user in lista_user" :key="user.user_ID">
        <div>{{user.name_user_full}}</div>
        <div>{{user.user_name}}</div>
        <div>{{user.e_mail}}</div>
        <div>{{user.genero_user}}</div>
        <div>{{user.birthday_user}}</div>
        <div class="btn-container"><button class="btn-edit">Editar</button> <button class="btn-remove">Remover</button></div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../servicos/users'
export default {
    name:'viewuser',
    data() {
      return {
        lista_user: []
      }
    },
    mounted() {
      User.listar().then(resposta => {
        this.lista_user = resposta.data.user  
      })
    }

}
</script>

<style scoped>
.container{
  width: 90%;
  margin: 0 auto;
  min-height: 535px;
}

#user-table-header ,
#user-table-rows,
.user-table-row {
  display: flex;
  justify-content: star-end;
  align-items: center;
  flex-wrap: wrap;
}
#user-table-header {
  margin: 0 auto;
  border-bottom: 3px solid gold;
  padding: 12px;
  font-weight: bold;
}
#user-table-header div,
.user-table-row div {
  width: 16.5%;
}

.user-table-row{
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #CCC;
}
.action {
  display: flex;
  justify-content: center;
}
.btn-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-remove {
  margin-left: 2%;
  border-radius: 10px;
  padding: 3px 10px 3px 10px;
  font-weight: bold;
  border-color: gold;
}
.btn-edit {
  border-radius: 10px;
  padding: 3px 10px 3px 10px;
  font-weight: bold;
  border-color: gold;
}
.title{
  color: gold;
  display: flex;
  justify-content: center;
}
</style>