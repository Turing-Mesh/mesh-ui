<template>
  <div class="home">
    <h1>This is a 🏡 component.</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
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
