<template>
  <section class="feedback-container">
    <h3 data-cy="moduleTitle">Module {{ $route.params.id }}</h3>
    <ProjectNav />
    <div>
      <Category :projectFeedback="projects[0].project_feedback[0]"/>
      <Category :projectFeedback="projects[0].project_feedback[1]"/>
      <Category :projectFeedback="projects[0].project_feedback[2]"/>
      <hr class="feedback-container__dividing-line">
      <div class="feedback-container__category">
        <p class="
        feedback-container__category--label
        feedback-container__category--label-overall
      ">
          Overall
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

    <section class="notes-container">
      <h2 class="s-h2">Student Notes</h2>
      <div class="form-container">
        <button @click="toggleNoteForm" class="module-btn">{{ showNoteForm ? 'Hide form' : 'Add new note' }}</button>
        <form @submit.prevent="AddNote" v-if="showNoteForm">
          <div class="note">
            <textarea class="note__textarea" v-model="formData.note" rows="4" placeholder="Make notes for yourself here . . . "></textarea>
          </div>
          <div class="buttons">
            <button class="s-button-primary">Add</button>
            <button class="s-button-primary-inverse" type="reset">Reset</button>
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

<style lang="scss" scoped>
  @import '@/styles/styles.scss';

  .feedback-container__category {
    margin-top: 15px;
  }
  .feedback-container__category--label {
    display: inline;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .progress-bar {
    display: inline;
    width: 100px;
    background-color: $turing-yellow;
    margin-left: 15px;
    font-size: 1.25rem;
    font-weight: bold;
  }
  #bar-average {
    background-color: $turing-blue;
  }
  .feedback-container__dividing-line {
    margin-top: 20px;
  }
</style>
