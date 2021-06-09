<template>
  <div class="home">
    <section class="feedback-container landing">
      <Login v-if="authenticated && !loggedIn"/>

      <Signup v-else-if="!authenticated"/>

      <div v-else-if="this.$store.state.myStudents.length === 0" class="landing">
        <h1 class="s-h1">Welcome, Turing student!</h1>
      </div>

      <div v-else class="landing">
        <h1 class="s-h1">Welcome, Turing Instructor!</h1>
        <h2 class="s-h2">You are currently teaching Mod 3!</h2>
      </div>
      <img class="turing-logo" src="https://assets.turing.edu/turing-school-mark-gray.png" alt="Turing logo">
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
