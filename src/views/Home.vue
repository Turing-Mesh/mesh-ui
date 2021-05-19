<template>
  <div class="home">
    <div class="greeting">
      <h3>Welcome to Mesh.</h3>
      <p> Click on a module and then a project, to see your feedback.</p>
    </div>

    <div class="main">
      <ModuleNav />
<!--      <section class="left-section">-->
<!--        <router-link :to="{-->
<!--          name: 'Module',-->
<!--          params: { id: 1}-->
<!--        }">-->
<!--          <h1 class="module">Module 1</h1>-->
<!--        </router-link>-->

<!--        <router-link :to="{-->
<!--          name: 'Module',-->
<!--          params: { id: 2}-->
<!--        }">-->
<!--          <h1 class="module">Module 2</h1>-->
<!--        </router-link>-->

<!--        <router-link :to="{-->
<!--          name: 'Module',-->
<!--          params: { id: 3}-->
<!--        }">-->
<!--          <h1 class="module">Module 3</h1>-->
<!--        </router-link>-->

<!--        <router-link :to="{-->
<!--          name: 'Module',-->
<!--          params: { id: 4}-->
<!--        }">-->
<!--          <h1 class="module">Module 4</h1>-->
<!--        </router-link>-->
<!--      </section>-->
      <section class="right-section">
        <ProjectNav />
        <StudentFeedback />

<!--        <section class="feedback-container">-->
<!--          <router-view  :key="$route.path" :moduleId="$route.path"/>-->
<!--        </section>-->

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
.greeting {
  margin: 0 40px;
  font-size: 1.2rem;
}
.rotating {
  width: 150px;
  transition: transform 3s ease-in-out;
}
.rotating:hover {
  transform: rotateZ(360deg);
}
.router-link-active .module-btn {
  //background-color: $turing-blue;
  background: #036575;
  color: #12F1FC;
}
.module-btn {
  border-radius: 50px;
  background: #4C4D4F;
  color: whitesmoke;
  height: auto;
  font-size: 1.4rem;
  font-weight: 600;
  width: 50%;
  padding: 20px;
  text-transform: uppercase;
}
</style>
