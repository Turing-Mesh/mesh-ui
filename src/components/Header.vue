<template>
  <div id="header" class="header">
    <div class="header-wrapper">
      <div class="logo-container">
        <router-link to="/">
          <img class="logo rotating" alt="Mesh logo" src="../assets/mesh-logo.png">
        </router-link>
        <h1 class="s-h1 greeting">Mesh</h1>
      </div>

      <div>
        <h3 class="">{{ user.userId === 112 ? 'Instructor' : 'Student' }}</h3>
      </div>

      <div v-if="loggedIn" class="link-container">
        <router-link to="/about">
          <h3 class="name">Hi, {{ user.userName ? user.userName : '🦑' }}
          <span class="user-icon"><i class="fas fa-user-circle"></i></span>
          </h3>
        </router-link>

        <div class="logout" >
          <i class="fas fa-sign-out-alt"> </i>
        </div>
      </div>
    </div>

    <div v-if="loggedIn" class="profile-links">
      <a v-if="user.program === 'FE'" class="outside-link" href="https://frontend.turing.edu/today/" target="_blank">
        <h3 class="s-h3">Calendar</h3>
      </a>
      <a v-else class="outside-link" href="https://backend.turing.edu/additional_resources/calendars" target="_blank">
        <h3 class="s-h3">Calendar</h3>
      </a>

      <a v-if="user.program === 'FE'" class="outside-link" href="https://frontend.turing.edu/lessons/" target="_blank">
        <h3 class="s-h3">Lessons</h3>
      </a>
      <a v-else class="outside-link" href="https://backend.turing.edu/module3/" target="_blank">
        <h3 class="s-h3">Lessons</h3>
      </a>

      <a v-if="user.program === 'FE'" class="outside-link" href="https://frontend.turing.edu/projects/" target="_blank">
        <h3 class="s-h3">Projects</h3>
      </a>
      <a v-else class="outside-link" href="https://backend.turing.edu/module3/projects/" target="_blank">
        <h3 class="s-h3">Projects</h3>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      date: new Date().toLocaleDateString()
    }
  },
  computed: {
    ...mapState([
      'loggedIn',
      'authenticated',
      'instructorAuth',
      'user'
    ])
  }
}
</script>
