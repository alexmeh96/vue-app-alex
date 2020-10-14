<template>
  <div>
    <h1>login page</h1>
    <form>
      <div>
        <input type="text" placeholder="username">
      </div>
      <div>
        <input type="password" placeholder="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <p>
      <router-link to="/registration">Registration</router-link>
    </p>
    <p>
      <router-link to="/">Main page</router-link>
    </p>

  </div>

</template>


