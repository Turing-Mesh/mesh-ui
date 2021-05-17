<template>
  <div class="home">
    <h1>This is a 🏡 component.</h1>
    <div class="main">
      <ModuleNav />
<!--      <section class="left-section">-->
<!--        <router-link to="/module" moduleNumber="1">-->
<!--          <h1 class="module">Module 1</h1>-->
<!--        </router-link>-->

<!--        <router-link to="/module" moduleNumber="2">-->
<!--          <h1 class="module">Module 2</h1>-->
<!--        </router-link>-->

<!--        <router-link to="/module" moduleNumber="3">-->
<!--          <h1 class="module">Module 3</h1>-->
<!--        </router-link>-->

<!--        <router-link to="/module" moduleNumber="4">-->
<!--          <h1 class="module">Module 4</h1>-->
<!--        </router-link>-->
<!--      </section>-->
      <section class="right-section">
        <ProjectNav />
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
import ProjectNav from '@/components/ProjectNav.vue'
import ModuleNav from '@/components/ModuleNav.vue'
import StudentFeedback from '@/components/StudentFeedback.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    ModuleNav,
    ProjectNav,
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
