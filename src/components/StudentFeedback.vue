<template>
  <section class="feedback-container s-content">
    <button data-cy="moduleTitle" class="s-border-radius-pill mod-title">Module {{ $route.params.id }}</button>
    <ProjectNav />
    <div v-if="projects.length > 0">
      <Project />
    </div>
    <div v-else>
      <h1 class="s-h1">There is nothing for this module yet. Stay tuned.</h1>
    </div>

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
        <button @click="toggleNoteForm" class="s-button-secondary show form-container__item">{{ showNoteForm ? 'Hide form' : 'Add new note' }}</button>
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
            <button class="s-button-primary-inverse reset" type="reset">Reset</button>
            <button class="s-button-primary add">Add</button>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
import ProjectNav from '@/components/ProjectNav'
import Project from '@/components/Project'

export default {
  name: 'StudentFeedback',
  data () {
    return {
      projects: [],
      module: null,
      moduleData: {},
      showNoteForm: false,
      studentNotes: [],
      formData: {
        note: ''
      }
    }
  },
  components: {
<<<<<<< HEAD
    Category,
    ProjectNav
  },
  props: {
    modData: Object,
    moduleId: String
  },
  methods: {
    findAverage () {
      return 'Function placeholder'
    },
    toggleNoteForm () {
      this.showNoteForm = !this.showNoteForm
    },
    AddNote () {
      const newNote = this.formData.note
      this.studentNotes.push(newNote)
      // do a fetch here to POST the new note to the student's data
      this.formData.note = ''
    }
    // async findModuleData (module) {
    //   const response = await fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/1/student_projects?mod=${module}`)
    //   this.moduleData = await response.json()
    // }
  },
  created () {
    fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/1/student_projects?mod=${this.$route.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.moduleData = data
        this.projects = this.moduleData.data.attributes.student_projects
      })
  },
  updated () {
    this.projects = this.moduleData.data.attributes.student_projects
    // console.log(this.projects)
=======
    ProjectNav,
    Project
>>>>>>> 3232b20 (Add Project component and corresponding route)
  }
}
</script>
