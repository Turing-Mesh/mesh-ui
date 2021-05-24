<template>
  <section class="feedback-container s-content">
    <ProjectNav />

    <div v-if="!$route.params.project_id">
<!--      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="loading spinner gif">-->
      <h1 class="s-h1">Select a project to get started!</h1>
    </div>

    <div v-else-if="!$store.state.selectedProject">
      <h1 class="s-h1">There is nothing for this project yet. Stay tuned.</h1>
    </div>

    <div v-if="this.$store.state.selectedProject">
      <Project :project="$store.state.selectedProject"/>
      <section class="notes-container">
        <p class="feedback-container__category--label">
          <span class="s-h2">Student Notes</span>
        </p>
        <div class="current-notes">
          <ul>
            <li v-for="(note, index) in studentNotes" :key="index">{{ note }}</li>
          </ul>
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
  </section>
</template>

<script>
// import store from '@/store/index.js'
import ProjectNav from '@/components/ProjectNav'
import Project from '@/components/Project'

export default {
  name: 'StudentFeedback',
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
    ProjectNav
  },
  methods: {
    toggleNoteForm () {
      this.showNoteForm = !this.showNoteForm
    },
    AddNote () {
      const newNote = this.formData.note
      this.studentNotes.push(newNote)
      // do a fetch here to POST the new note to the student's data
      this.formData.note = ''
    },
    findProjectSelected () {
      if (this.moduleData.data.attributes.student_projects.find(project => Number(project.project_number) === this.$route.params.project_id)) {
        this.project.push(this.moduleData.data.attributes.student_projects.find(project => Number(project.project_number) === this.$route.params.project_id))
      }
    }
  },
  // projects () {
  //   return this.$store.getters.currentModuleProjects
  // }
  created () {
    this.$store.dispatch('updateSelectedModule', this.$route.params.id)
    this.$store.dispatch('updateSelectedProject', this.$route.params.project_id)
    // this.loading = true
    // this.$store.dispatch('fetchModule', this.$route.params.id)
    //   .then(() => {
    //     this.loading = false
    //   })
  }
}
</script>
