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
        <StudentFeedback :modData="modData"/>

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
      id: this.$route.params.id,
      modData: { data: { id: 1, type: 'projects', attributes: { mod: 1, student_projects: [{ id: 109, name: 'war or peace', program: 'BE', project_number: 1, project_type: 'solo', is_final_project: false, instructor_comments: 'Some real good stuff', student_comments: 'My personal notes', project_feedback: [{ id: 1, rubric_category_name: 'Code Quality', score: 2.5, comment: 'Overall good work.' }, { id: 2, rubric_category_name: 'Testing', score: 1.5, comment: 'Just ok.' }, { id: 1, rubric_category_name: 'Completion', score: 4, comment: 'Nice.' }] }] } } }
    }
  },
  components: {
    ModuleNav,
    ProjectNav,
    StudentFeedback
  },
  methods: {
    // findModuleClicked () {
    //   /* pass this down to module nav to figure out which module is clicked, then set modData state with fetched data */
    // }
  },
  updated () {
    // this.findModuleClicked()
  },
  created () {
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
</style>
