<template>
  <div>
    <h1>{{getUsername}} profile</h1>
    <router-link to="/">Main page</router-link>
    <form @submit.prevent="logoutSubmit">
      <button type="submit">logout</button>
    </form>

  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    computed: mapGetters(['getLoggedIn', 'getUsername']),
    created() {
      if (!this.getLoggedIn) {
        this.$router.push('/login')
      }
    },
    methods: {
      ...mapMutations(['logoutMut']),
      logoutSubmit() {
        this.logoutMut()
        this.$router.push('/login')
      }
    }
  }
</script>
