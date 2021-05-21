<template>
  <div id="header" class="header">
    <div class="header-wrapper">
      <div class="logo-container">
        <router-link to="/">
          <img class="logo rotating" alt="Mesh logo" src="../assets/mesh-logo.png">
        </router-link>
      </div>
      <div class="link-container">
        <h3 class="date">
          <img class="calendar" alt="Calendar icon" src="../assets/calendar.svg">
          {{ date }}
        </h3> |
        <router-link to="/about">
          <h3 class="name">Hi, Jessica</h3>
        </router-link>
      </div>
    </div>

    <div v-if="loggedIn" class="greeting s-content">
      <h2 class="s-h2">Welcome to Mesh.</h2>
      <p>Click on a module and then a project, to see your feedback.</p>
    </div>

    <div v-else-if="!loggedIn" class="greeting">
      <h3>You must log in to see your feedback.</h3>
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
    loggedIn: Boolean
  }
}
</script>

<style scoped>
.date,
.name {
  font-size: 2rem;
  padding: 0 20px;
  color: #4C4D4F;
}

.calendar {
  margin: 0 10px;
}

.greeting {
  margin: 0 40px;
  font-size: 1.2rem;
}
</style>
