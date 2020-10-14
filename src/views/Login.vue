<template>
  <div>
    <h1>login page</h1>
    <form @submit.prevent="submitLogin">
      <div>
        <input type="text" v-model="username" placeholder="username">
      </div>
      <div>
        <input type="password" v-model="password" placeholder="password">
      </div>
      <button type="submit">Login</button>
    </form>

    <p>
      <router-link to="/registration">Registration</router-link>
    </p>
    <p>
      <router-link to="/">Main page</router-link>
    </p>
    <p v-if="message">{{message}}</p>

  </div>

</template>

<script>
import User from "@/models/user";
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      message: ''
    }
  },
  computed: mapGetters(['getLoggedIn']),

  created() {
    if (this.getLoggedIn) {
      this.$router.push('/profile')
    }
  },

  methods: {
    ...mapActions(['loginAct']),
    submitLogin() {
      this.loading = true
      const user = new User(this.username, '', this.password)
      this.loginAct(user).then(
          () => {
            this.$router.push('/profile')
          },
          () => {
            this.loading = false
            this.message = 'Incorrect login or password'
            console.log(this.message)
          }
      )


    }
  }
}
</script>


