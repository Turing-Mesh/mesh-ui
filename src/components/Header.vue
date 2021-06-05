<template>
  <div id="header" class="header">
    <div class="header-wrapper">
      <div class="logo-container">
        <router-link to="/">
          <img class="logo rotating" alt="Mesh logo" src="../assets/mesh-logo.png">
        </router-link>
      </div>

      <h2 class="date">
        <!--          <img class="calendar" alt="Calendar icon" src="../assets/calendar.svg">-->
        <a class="outside-link" href="https://frontend.turing.edu/today/" target="_blank">
          <i class="calendar fal fa-calendar-alt"></i>
          {{ date }}
        </a>
      </h2>

      <div v-if="loggedIn" class="link-container">
        <router-link to="/about">
          <h3 class="name">Hi, {{ userName ? userName : '🦑' }}</h3>
        </router-link>
        <div>
          <a class="outside-link" href="https://frontend.turing.edu/lessons/" target="_blank">
            <h3 class="date">Current Mod: {{ currentModNum }}</h3>
          </a>
        </div>
        <div class="logout" >
          <i class="fas fa-sign-out-alt"> </i>
        </div>
      </div>
    </div>

    <div v-if="loggedIn" class="greeting s-content">
      <h2 class="s-h2">Welcome to Mesh.</h2>
      <p v-if="this.$store.state.instructorAuth === false">Click on a module and then a project, to see your feedback.</p>
    </div>

    <div v-else-if="!loggedIn" class="greeting">
      <h3>You must be logged in to see your feedback.</h3>
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
      'userId',
      'userName',
      'currentModNum'
    ])
  }
}
</script>
