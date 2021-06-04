<template>
  <section class="feedback-container">
    <ProjectNav :mod="this.$route.params.id"/>
      <!--      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="loading spinner gif">-->
      <div class="msg-container">
        <div v-if="!$route.params.project_id">
          <h1 class="s-h1">Select a project to get started!</h1>
        </div>
        <div v-else-if="!this.project" >
          <h1 class="s-h1">There is nothing for this project yet. Stay tuned.</h1>
        </div>
      </div>
    <div v-if="this.project">
      <Project :project="this.project"/>
      <section class="notes-container">
        <p class="feedback-container__category--label">
          <span class="s-h2">Student Notes</span>
        </p>

        <div class="current-notes">
          <ul>
            <li v-for="(note, index) in studentNotes" :key="index" class="s-text-body">{{ note }}</li>
          </ul>
        </div>

        <div class="arrow-row" @click="toggleNoteForm">
          <img
            class="expanding-arrow"
            :class="{ 'expanded': showNoteForm}"
            src="../assets/arrow.svg"
            alt="expanding arrow"
          > <span class="s-text-body">Add more notes.....</span>
        </div>

        <div class="form-container">
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
  name: 'StudentFeedback',
  // watch: {
  //   $route (to, from) {
  //     this.$store.dispatch('clearForm', this.$route.params.project_id)
  //   }
  // },
  data () {
    return {
      // I think all of these can be removed once we get everything into global state
      loading: false,
      module: null,
      showNoteForm: false,
      studentNotes: [],
      formData: {
        note: ''
      }
    }
  },
  components: {
    Project,
    ProjectNav,
    Rubric
  },
  computed: {
    ...mapState([
      'loggedIn',
      'authenticated',
      'instructorAuth',
      'userId'
    ]),
    project: function () {
      return this.$store.getters.getSelectedProject(this.$route.params.id, this.$route.params.project_id)
    }
  },
  methods: {
    toggleNoteForm () {
      this.showNoteForm = !this.showNoteForm
    },
    AddNote () {
      this.studentNotes.push(this.formData.note)
      const payload = {
        userId: this.userId,
        projectId: this.project.id,
        notes: this.studentNotes
      }
      this.$store.dispatch('addNotesToProject', payload)
      this.formData.note = ''
    },
    getForm () {
      this.$store.dispatch('getForm', { instructorId: 122, studentId: this.$store.state.currentStudent.attributes.user_id, modNum: this.$route.params.id, projectNum: this.$route.params.project_id })
    }
  },
  created () {
    if (this.project.student_comments !== null) {
      this.studentNotes = this.project.student_comments
    }
  }
}
</script>
