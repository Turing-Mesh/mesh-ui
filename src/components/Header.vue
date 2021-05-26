<template>
  <div id="header" class="header">
    <div class="header-wrapper">
      <div class="logo-container">
        <router-link to="/">
          <img class="logo rotating" alt="Mesh logo" src="../assets/mesh-logo.png">
        </router-link>
      </div>
      <div class="link-container">
        <h2 class="date">
          <img class="calendar" alt="Calendar icon" src="../assets/calendar.svg">
          {{ date }}
        </h2>
        <router-link v-if="loggedIn" to="/about">
          <h3 class="name">Hi, {{ userName ? userName : 'Jessica' }}</h3>
        </router-link>
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
export default {
  data () {
    return {
      date: new Date().toLocaleDateString()
    }
  },
  props: {
    loggedIn: Boolean,
    userName: String
  }
}
</script>
