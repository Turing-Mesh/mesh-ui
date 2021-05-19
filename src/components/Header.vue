<template>
  <div id="header" class="header">
    <div class="header-wrapper">
      <div class="logo-container">
        <router-link to="/">
          <img class="logo" alt="Mesh logo" src="../assets/mesh-logo.png">
        </router-link>
      </div>
      <div class="link-container">
        <h3 class="date">
          <img class="calendar" alt="Calendar icon" src="../assets/calendar.svg">
          {{ date }}
        </h3> |
        <h3 class="name">Hi, Nikki</h3> |
        <router-link to="/about">
          About
        </router-link>
      </div>
    </div>
    <div class="greeting">
      <h3>Welcome to Mesh.</h3>
      <p> Click on a module and then a project, to see your feedback.</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '05/15/2015'
    }
  }
}
</script>

<style scoped>
.date,
.name {
  font-size: 2rem;
  padding: 0 20px;
}

.calendar {
  margin: 0 10px;
}

.greeting {
  margin: 0 40px;
  font-size: 1.2rem;
}
</style>
