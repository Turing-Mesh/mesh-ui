<template>
  <section class="feedback-container s-content">
    <ProjectNav />

      <!--      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="loading spinner gif">-->
      <h1 v-if="!$route.params.project_id" class="s-h1">Select a project to get started!</h1>

      <button v-else-if="!this.project && this.$store.state.myStudents.data.length && !this.$store.state.form.data" class="s-button submit-feedback" @click="getForm">Submit Feedback</button>

    <div v-if="this.project">
      <Project :project="this.project"/>
      <section class="notes-container">
        <p class="feedback-container__category--label">
          <span class="s-h2">Student Notes</span>
        </p>
        <div class="current-notes">
          <p>{{ studentNote }}</p>
        </div>
        <div class="form-container">
          <button @click="toggleNoteForm" class="s-button s-button-secondary show form-container__item">
            {{ showNoteForm ? 'Hide form' : 'Add new note' }}
          </button>
          <form @submit.prevent="AddNote" v-if="showNoteForm" class="form-container__item">
            <div class="note form-container__item--note">
              <textarea class="note__textarea"
                        v-model="formData.note"
                        rows="4"
                        placeholder="Make notes for yourself here . . . "
                        required
              >
              </textarea>
            </div>
            <div class="buttons form-container__item--buttons">
              <button class="s-button s-button-primary-inverse reset" type="reset">Reset</button>
              <button class="s-button s-button-primary add">Add</button>
            </div>
          </form>
        </div>
      </section>
    </div>

    <div v-else-if="!this.project && this.$store.state.myStudents && this.$store.state.form.data">
      <Rubric />
    </div>
  </section>
</template>

<script>
import ProjectNav from '@/components/ProjectNav'
import Project from '@/components/Project'
import Rubric from '@/components/Rubric'
import { mapState } from 'vuex'

export default {
  components: {
    Project,
    ProjectNav,
    Rubric
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
