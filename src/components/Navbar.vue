<template>
  <div id="navbar" class="navbar">
    <div class="nav">
      <div class="logo-container">
        <img class="logo" alt="Mesh logo" src="../assets/mesh-logo.png">
      </div>
      <div class="link-container">
        <span class="date">{{ date }}</span> |
        <span class="name">Hi, Nikki</span> |
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-view/>
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
