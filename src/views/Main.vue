<template>
  <div>
    <h1>Main page</h1>
    <hr />
    <h3>Content:</h3>
    <div>{{getContent}}</div>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
    <p>
      <router-link to="/profile">User profile</router-link>
    </p>
    <p>
      <router-link to="/admin">Admin</router-link>
    </p>

  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
  computed: mapGetters(["getContent"]),
  methods: mapActions(["allContentAct"]),
  created() {
    this.allContentAct()
  }

}
</script>

