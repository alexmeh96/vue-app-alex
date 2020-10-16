<template>
  <div>
    <h1>Admin</h1>
    <div>{{getContent}}</div>
    <router-link to="/">Main page</router-link>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  computed: mapGetters(['getContent', 'getRole', 'getLoggedIn']),
  methods: mapActions(['adminContentAct']),
  created() {
    if (this.getLoggedIn) {
      if (this.getRole.includes('ROLE_ADMIN', 0)){
        this.adminContentAct()
      }
      else {
        this.$router.push("/")
      }
    }
    else {
      this.$router.push("/login")
    }
  }
}
</script>
