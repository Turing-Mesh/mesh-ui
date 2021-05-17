<template>
  <div class="home">
    <h1>This is a 🏡 component.</h1>
    <div class="main">
<<<<<<< HEAD
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
=======
      <section class="left-section">
        <router-link :to="{
          name: 'Module',
          params: { id: 1}
        }">
          <h1 class="module">Module 1</h1>
        </router-link>

        <router-link :to="{
          name: 'Module',
          params: { id: 2}
        }">
          <h1 class="module">Module 2</h1>
        </router-link>

        <router-link :to="{
          name: 'Module',
          params: { id: 3}
        }">
          <h1 class="module">Module 3</h1>
        </router-link>

        <router-link :to="{
          name: 'Module',
          params: { id: 4}
        }">
          <h1 class="module">Module 4</h1>
        </router-link>
      </section>
>>>>>>> 88f65d2 (resolve next rebase conflict)
      <section class="right-section">
        <ProjectNav />
        <StudentFeedback />

        <section class="feedback-container">
          <router-view  :key="$route.path" :moduleId="$route.path"/>
        </section>

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
      id: this.$route.params.id
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
