<template>
  <div>
    <h1>{{getUsername}} profile</h1>
    <router-link to="/">Main page</router-link>
    <form @submit.prevent="logoutSubmit">
      <button type="submit">logout</button>
    </form>

    <h3>Content:</h3>
    <div>{{getContent}}</div>

  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    computed: mapGetters(['getLoggedIn', 'getUsername', 'getContent']),
    created() {
      if (!this.getLoggedIn) {
        this.$router.push('/login')
      }
      else {
        this.userContentAct()
      }

    },
    methods: {
      ...mapActions(['userContentAct', 'logoutAct']),
      logoutSubmit() {
        this.logoutAct()
        this.$router.push('/login')
      }
    }
  }
</script>
