<template>
  <div id="header" class="header">
    <div class="header-wrapper">
      <div class="logo-container">
        <router-link to="/">
          <img class="logo" alt="Mesh logo" src="../assets/mesh-logo.png">
        </router-link>
      </div>
      <div class="link-container">
        <span class="date">
          <img class="calendar" alt="Calendar icon" src="../assets/calendar.svg">
          {{ date }}
        </span> |
        <span class="name">Hi, Nikki</span>
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
