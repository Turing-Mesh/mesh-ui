<template>
  <section class="feedback-container s-content">
    <button data-cy="moduleTitle" class="s-border-radius-pill mod-title">Module {{ $route.params.id }}</button>
    <ProjectNav />
    <div v-if="projects.length > 0">
      <Category :projectFeedback="projects[0].project_feedback[0]"/>
      <Category :projectFeedback="projects[0].project_feedback[1]"/>
      <Category :projectFeedback="projects[0].project_feedback[2]"/>
      <hr class="feedback-container__dividing-line">
      <div class="feedback-container__category">
        <p class="
        feedback-container__category--label
        feedback-container__category--label-overall
      ">
          <span class="s-h2">Overall</span>
        </p>
        <div class="progress-bar" id="bar-average">{{ findAverage() }}</div>
        <p class="
        feedback-container__category--comments
        feedback-container__category--comments-overall
      ">
          {{ projects[0].instructor_comments }}
        </p>
      </div>
    </div>
    <div v-else>
      <h1 class="s-h1">There is nothing for this module yet. Stay tuned.</h1>
    </div>

    <section class="notes-container">
      <h2 class="s-h2">Student Notes</h2>
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
            <button class="s-button-primary add">Add</button>
            <button class="s-button-primary-inverse reset" type="reset">Reset</button>
          </div>
        </form>
      </div>

      <div class="current-notes">
        <ul>
          <li v-for="(note, index) in studentNotes" :key="index">{{ note }}</li>
        </ul>
      </div>
    </section>
  </section>
</template>

<script>
import Category from '@/components/Category.vue'
import ProjectNav from '@/components/ProjectNav'

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
  }
}
</script>
