<template>
  <div class="home">
    <h1>This is a 🏡 component.</h1>
    <div class="main">
      <section class="left-section">
        <h1 class="module">Module 1</h1>
        <h1 class="module">Module 2</h1>
        <h1 class="module">Module 3</h1>
        <h1 class="module">Module 4</h1>
      </section>
      <section class="right-section">
        <h1>right side</h1>
      </section>
    </div>
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
