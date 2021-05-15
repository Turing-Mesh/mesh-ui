<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/mesh-logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Mesh'
    }
  },
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
