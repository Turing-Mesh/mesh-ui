<template>
  <section class="feedback-container">
    <ProjectNav />
    <section class="instructor-feedback-container">
      <!--      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="loading spinner gif">-->
      <div class="msg-container">
        <div v-if="!$route.params.project_id">
          <h1 class="s-h1">Select a project to get started!</h1>
        </div>

        <!--    begin hardcoded info  -->
        <div v-else-if="this.hacky && !this.project" class="upper-project-hack">
          <div class="upper-project">
            <a class="outside-link" href="https://backend.turing.edu/module3/projects/sweater_weather/" target="_blank">
              <h2 class="project-name-hacky s-link s-h2"><em>Sweater Weather</em></h2>
            </a>
            <div class="tricolor">
              <div class="yellow"></div>
              <div class="red"></div>
              <div class="blue"></div>
            </div>
          </div>
          <div class="msg-container-hack">
            <h1 class="s-h1">There's no feedback yet for this project.</h1>
            <button class="s-button submit-feedback" @click="getForm">Submit Feedback</button>
          </div>
        </div>
        <!--    end of hardcoded info  -->
        <div v-else-if="!this.project && this.$store.state.myStudents.data.length && !this.$store.state.form.data" class="msg-container">
          <h1 class="s-h1">There's no feedback yet for this project.</h1>
          <button class="s-button submit-feedback" @click="getForm">Submit Feedback</button>
        </div>
      </div>

      <div v-if="this.project">
        <Project :project="this.project"/>
      </div>

      <div v-else-if="!this.project && this.$store.state.myStudents && this.$store.state.form.data">
        <Rubric v-if="$route.params.project_id"/>
      </div>
    </section>
  </section>
</template>

<script>
import ProjectNav from '@/components/ProjectNav'
import Project from '@/components/Project'
import Rubric from '@/components/Rubric'
import { mapState } from 'vuex'

export default {
  watch: {
    $route (to, from) {
      this.$store.dispatch('clearForm', this.$route.params.project_id)
    }
  },
  components: {
    Project,
    ProjectNav,
    Rubric
  },
  computed: {
    ...mapState([
      'currentStudent',
      'hacky'
    ]),
    project: function () {
      return this.$store.getters.getSelectedProject(this.$route.params.id, this.$route.params.project_id)
    }
  },
  methods: {
    getForm () {
      this.$store.dispatch('getForm', { instructorId: 122, studentId: this.currentStudent.attributes.user_id, modNum: this.$route.params.id, projectNum: this.$route.params.project_id })
    }
  }
}
</script>
