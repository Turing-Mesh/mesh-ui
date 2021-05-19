<template>
  <div class="home">
    <div class="greeting">
      <h3>Welcome to Mesh.</h3>
      <p> Click on a module and then a project, to see your feedback.</p>
    </div>

    <div class="main">
      <!-- <ModuleNav /> -->
     <section class="left-section">
       <router-link class="module" module="1" :to="{
         name: 'StudentFeedback',
         params: { id: 1 }
       }">
         Module 1
       </router-link>

       <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 2 }
       }">
         Module 2
       </router-link>

       <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 3 }
       }">
         Module 3
       </router-link>

       <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 4 }
       }">
         Module 4
       </router-link>
     </section>
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
// import ModuleNav from '@/components/ModuleNav.vue'
import StudentFeedback from '@/components/StudentFeedback.vue'

export default {
  name: 'Home',

  data () {
    return {
      id: this.$route.params.id,
      modData: { data: { id: 1, type: 'projects', attributes: { mod: 1, student_projects: [{ id: 109, name: 'war or peace', program: 'BE', project_number: 1, project_type: 'solo', is_final_project: false, instructor_comments: 'Some real good stuff, truly a miracle you pulled this off. I couldnt be more proud of you. Here, have a job 👩🏻‍💻', student_comments: 'My personal notes', project_feedback: [{ id: 1, rubric_category_name: 'Code Quality', score: 2.5, comment: 'Overall good work. I love you.' }, { id: 2, rubric_category_name: 'Testing', score: 1.5, comment: 'Just ok.' }, { id: 1, rubric_category_name: 'Completion', score: 4, comment: 'Nice. This is really rather quite nice.' }] }] } } }
    }
  },
  components: {
    ProjectNav,
    StudentFeedback
  },
  methods: {
    // findModuleClicked () {
    //   /* do some router matching */
    // }
  },
  updated () {
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

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

a.module {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  margin: 0;
  text-align: center;
  height: 70px;
  line-height: 70px;

  &:hover {
    text-decoration: underline;
    background-color: $turing-blue;
  }
}

.router-link-active {
  background-color: $turing-blue;
}

</style>
