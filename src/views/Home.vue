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
        <section class="projects-container">
          <h1 class="project">Project 1</h1>
          <h1 class="project">Project 2</h1>
          <h1 class="project">Project 3</h1>
          <h1 class="project">Project 4</h1>
        </section>

        <StudentFeedback />

        <section class="notes-container">
          <h2>Notes section goes here</h2>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StudentFeedback from '@/components/StudentFeedback.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    StudentFeedback
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
