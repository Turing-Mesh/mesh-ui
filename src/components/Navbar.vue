<template>
  <div class="navbar">
    <div id="nav">
      <div class="logo-container">
        <img class="logo" alt="Vue logo" src="../assets/mesh-logo.png">
      </div>
      <div class="link-container">
        <span>5/15/2011</span> |
        <span>Hi, Nikki</span> |
        Student |
        Welcome to the NavBar!
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.navbar {
  background: #1DEEF8;
}

.logo {
  width: 50px;
}

.logo-container {
  float: left;
}

.link-container {
  float: right;
}

span {
  color: purple;
}

</style>
