<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/mesh-logo.png">
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
