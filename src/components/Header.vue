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
        <h3 class="name">Hi, Nikki</h3>
      </div>
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
</style>
