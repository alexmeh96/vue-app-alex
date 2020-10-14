<template>
  <div>
    <h1>Registration page</h1>
    <form>
      <div>
        <input type="email" placeholder="email">
      </div>
      <div>
        <input type="text" placeholder="username">
      </div>
      <div>
        <input type="password" placeholder="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
    <p>
      <router-link to="/">Main page</router-link>
    </p>

  </div>
</template>


