<template>
  <div>
    <h1>Registration page</h1>
    <form @submit.prevent="submitRegister">
      <div>
        <input type="email" v-model="email" placeholder="email">
      </div>
      <div>
        <input type="text" v-model="username" placeholder="username">
      </div>
      <div>
        <input type="password" v-model="password" placeholder="password">
      </div>
      <button type="submit">Registration</button>
    </form>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
    <p>
      <router-link to="/">Main page</router-link>
    </p>
    <p v-if="message">
      {{message}}
    </p>



  </div>
</template>

<script>
  import User from "@/models/user";
  import {mapActions} from 'vuex'
  export default {
    data(){
      return {
        email: '',
        password: '',
        username: '',
        loading: false,
        message: ''
      }
    },
    methods: {
      ...mapActions(['registerAct']),
      submitRegister() {
        this.loading = true

        const newUser = new User(this.username, this.email, this.password )
        this.registerAct(newUser).then(
            () => {
              this.message = "Registration success!"
            },
            () => {
              this.loading = false
              this.message = "Registration error!"
            }
        )

      }
    }

  }
</script>
