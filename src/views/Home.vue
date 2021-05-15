<template>
  <div class="home">
    <router-link to="/about">
      <img class="rotating" alt="Vue logo" src="../assets/mesh-logo.png">
    </router-link>
    <HelloWorld msg="Welcome to Mesh"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.rotating {
  width: 150px;
  transition: transform 3s ease-in-out;
}
.rotating:hover {
  transform: rotateZ(360deg);
}
</style>
