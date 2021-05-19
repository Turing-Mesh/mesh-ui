<template>
  <section id="nope" class="feedback-container">
    Sorry, no such route. Go fish.
  </section>
</template>

<script>
export default {
  name: 'NoRoute.vue'
}
</script>

<style scoped>
#nope {
  text-align: center;
  font-size: 3rem;
  background-image: url("../assets/jumble.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  background: url("../assets/jumble.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: contain;
  height: 100%;
}

</style>
