<template>
  <div class="home">
    <section class="feedback-container landing">
      <div v-if="authenticated && !loggedIn">
        <Login />
      </div>

      <div v-else-if="!authenticated">
        <Signup />
      </div>

      <div v-else class="landing">
        <h1 class="s-h1" id="hello">Welcome, Turing student!</h1>
        <img class="turing-logo" src="https://assets.turing.edu/turing-school-mark-gray.png" alt="Turing logo">
      </div>
    </section>
  </div>
</template>

<script>
import Signup from '@/views/Signup'
import Login from '@/views/Login'

export default {
  name: 'Home',
  components: {
    Signup,
    Login
  },
  props: {
    loggedIn: Boolean,
    authenticated: Boolean
  }
}
</script>
