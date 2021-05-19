<template>
  <section class="feedback-container">
    <ProjectNav />

    <h1>Module {{ this.moduleData.data.attributes.mod}}</h1>
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

    <section class="notes-container">
      <h2>Notes section goes here</h2>
    </section>
  </section>
</template>

<script>
import Category from '@/components/Category.vue'
import ProjectNav from '@/components/ProjectNav.vue'

export default {
  name: 'Module',
  // watch: {
  //   $route (to, from) {
  //     this.module = parseInt(this.$route.fullPath.slice(-1))
  //     this.findModuleData()
  //   }
  // },
  data () {
    return {
      projects: [],
      module: null,
      moduleData: {}
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
    async findModuleData () {
      const response = await fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/1/student_projects?mod=${this.module}`)
      const data = await response.json()
      this.moduleData = data
    }
  },
  created () {
  },
  updated () {
    this.projects = this.moduleData.data.attributes.student_projects
    console.log(this.projects)
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
