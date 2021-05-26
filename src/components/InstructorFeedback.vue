<template>
  <section class="feedback-container s-content">
    <ProjectNav />

      <!--      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="loading spinner gif">-->
      <h1 v-if="!$route.params.project_id" class="s-h1">Select a project to get started!</h1>

      <button v-else-if="!this.project && this.$store.state.myStudents.data.length && !this.$store.state.form.data" class="s-button submit-feedback" @click="getForm">Submit Feedback</button>

    <div v-if="this.project">
      <Project :project="this.project"/>
    </div>

    <div v-else-if="!this.project && this.$store.state.myStudents && this.$store.state.form.data">
      <Rubric v-if="$route.params.project_id"/>
    </div>
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
      'currentStudent'
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
