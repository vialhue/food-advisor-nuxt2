<template>
  <div class="box column is-4 is-offset-4 box-login">
    <div class="columns">
      <div class="column has-text-centered">
        <img src="@/static/logo.png" />
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-left">
        <input class="input" type="text" placeholder="email" v-model="email"/>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-left">
        <input class="input" type="text" placeholder="contraseña" v-model="password"/>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <nuxt-link to="/" class="button is-danger">Cancelar</nuxt-link>
        <button class="button is-primary" @click="onLogin">Indentificate</button>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from '~/plugins/firebase'

export default {
  layout: 'login',
  data() {
    return {
      email: '',
      password: ''
    }
  },  
  created() {
    firebase.auth().signOut()
  },
  methods: {
    onLogin() {
      console.log("Login!!")
      const response = firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      response.then(data => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style>
.box-login {
  margin-top: 30px;
}
</style>