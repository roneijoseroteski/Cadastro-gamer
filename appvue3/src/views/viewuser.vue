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
      <div class="user-table-row" v-for="user in lista_user" :key="user.id">
        <div>{{user.name_user_full}}</div>
        <div>{{user.name_user}}</div>
        <div>{{user.e_mail}}</div>
        <div>{{user.genero_user}}</div>
        <div>{{user.birthday_user}}</div>
        <div class="btn-container"></div>
        <button id="btn-edit" @click="goBack(user)">Editar</button>
        <button @click="removeuser(user)"
        class="btn-remove">Remover</button>
        </div>
      </div>
  </div>
</template>
<script>
import User from '../servicos/users';
export default {
  name: 'viewuser',
  data() {
    return {
      lista_user: []

    }
  },
  mounted() {
    User.listar().then(resposta => {
      
      this.lista_user = resposta.data;
    })
  },
  methods: {
    goBack(values) {
      const value = {
        id: values.id,
        name_user_full: values.name_user_full,
        name_user: values.name_user,
        birthday_user: values.birthday_user,
        e_mail: values.e_mail,
        genero_user: values.genero_user,
        password_user: values.password_user,
        isEditing: false,
      };
      this.$router.push({ name: 'Home', params: value });
    },
    removeuser(id) {
      User.delete(id.id).then( response => {
        User.listar().then( resposta => {
          this.lista_user = resposta.data;
        });
      });
    },
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
  min-height: 535px;
}

#user-table-header,
#user-table-rows,
.user-table-row {
  display: flex;
  justify-content: star-end;
  align-items: center;
  flex-wrap: wrap;
}
#user-table-header {
  margin: 0 auto;
  border-bottom: 3px solid #d1c748;
  padding: 12px;
  font-weight: bold;
}
#user-table-header div,
.user-table-row div {
  width: 16.5%;
}

.user-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #CCC;
}
.action {
  display: flex;
  justify-content: center;
}
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-remove {
  margin-left: 2%;
  border-radius: 10px;
  padding: 3px 10px 3px 10px;
  font-weight: bold;
  border-color: #d1c748;
}
#btn-edit {
  border-radius: 10px;
  padding: 3px 10px 3px 10px;
  font-weight: bold;
  border-color: #d1c748;
}
.title {
  color: #d1c748 ;
  display: flex;
  justify-content: center;
}
</style>