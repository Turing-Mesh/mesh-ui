<template>
  <section class="feedback-container s-content">
    <ProjectNav />
    <!--      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="loading spinner gif">-->
    <!--      <h1 v-if="!$route.params.project_id && !this.$store.state.myStudents" class="s-h1">Select a project to get started!</h1>-->
    <!--      <h1 v-else-if="!$route.params.project_id && this.$store.state.myStudents" class="s-h1">Select a project to submit some feedback!</h1>-->
    <!--      <h1 v-else-if="!this.project && !this.$store.state.myStudents" class="s-h1">There is nothing for this project yet. Stay tuned.</h1>-->
    <!--      <button v-else-if="!this.project && this.$store.state.myStudents && !this.$store.state.form.data" class="s-h1" @click="getForm">Submit Feedback</button>-->

    <!--      <div v-if="!this.project && this.$store.state.myStudents && this.$store.state.form.data">-->
    <!--        <h1>{{ this.$store.state.form.data.attributes.rubric_template[0].rubric_category_name }}</h1>-->
    <!--        <h1>{{ this.$store.state.form.data.attributes.rubric_template[1].rubric_category_name }}</h1>-->
    <!--        <h1>{{ this.$store.state.form.data.attributes.rubric_template[2].rubric_category_name }}</h1>-->
    <!--        <h1>{{ this.$store.state.form.data.attributes.rubric_template[3].rubric_category_name }}</h1>-->
    <!--      </div>-->

    <div v-if="instructorAuth === false && this.project">
      <Project :project="this.project"/>
<!--      <section class="notes-container">-->
<!--        <p class="feedback-container__category&#45;&#45;label">-->
<!--          <span class="s-h2">Student Notes</span>-->
<!--        </p>-->
<!--        <div class="current-notes">-->
<!--          <p>{{ studentNote }}</p>-->
<!--        </div>-->
<!--        <div class="form-container">-->
<!--          <button @click="toggleNoteForm" class="s-button s-button-secondary show form-container__item">-->
<!--            {{ showNoteForm ? 'Hide form' : 'Add new note' }}-->
<!--          </button>-->
<!--          <form @submit.prevent="AddNote" v-if="showNoteForm" class="form-container__item">-->
<!--            <div class="note form-container__item&#45;&#45;note">-->
<!--              <textarea class="note__textarea"-->
<!--                        v-model="formData.note"-->
<!--                        rows="4"-->
<!--                        placeholder="Make notes for yourself here . . . "-->
<!--                        required-->
<!--              >-->
<!--              </textarea>-->
<!--            </div>-->
<!--            <div class="buttons form-container__item&#45;&#45;buttons">-->
<!--              <button class="s-button s-button-primary-inverse reset" type="reset">Reset</button>-->
<!--              <button class="s-button s-button-primary add">Add</button>-->
<!--            </div>-->
<!--          </form>-->
<!--        </div>-->
<!--      </section>-->
          </div>
  </section>
</template>

<script>
import ProjectNav from '@/components/ProjectNav'
import Project from '@/components/Project'
import { mapState } from 'vuex'

export default {
  name: 'InstructorFeedbackForm',
  data () {
    return {}
  },
  components: {
    Project,
    ProjectNav
  },
  computed: {
    ...mapState([
      'loggedIn',
      'authenticated',
      'instructorAuth'
    ]),
    project: function () {
      return this.$store.getters.getSelectedProject(this.$route.params.id, this.$route.params.project_id)
    }
  },
  methods: {
    getForm () {
      this.$store.dispatch('getForm', { instructorId: 122, studentId: this.$store.state.currentStudent.attributes.user_id, modNum: this.$route.params.id, projectNum: this.$route.params.project_id })
    }
  }
}
</script>

<style scoped>

</style>
