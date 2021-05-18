<template>
  <section class="feedback-container">
    <router-view  :key="$route.path" :moduleId="$route.path"/>
    <div class="feedback-container__category">
      <p class="feedback-container__category--label">{{ this.projects[0].project_feedback[0].rubric_category_name }} </p>
      <div class="progress-bar" id="bar1">{{ this.projects[0].project_feedback[0].score }}</div>
      <p class="feedback-container__category--comments">
        {{ this.projects[0].project_feedback[0].comment }}
      </p>
    </div>
    <div class="feedback-container__category">
      <p class="feedback-container__category--label">{{ this.projects[0].project_feedback[1].rubric_category_name }} </p>
      <div class="progress-bar" id="bar2">{{ this.projects[0].project_feedback[1].score }}</div>
      <p class="feedback-container__category--comments">
        {{ this.projects[0].project_feedback[1].comment }}
      </p>
    </div>
    <div class="feedback-container__category">
      <p class="feedback-container__category--label">{{ this.projects[0].project_feedback[2].rubric_category_name }} </p>
      <div class="progress-bar" id="bar3">{{ this.projects[0].project_feedback[2].score }}</div>
      <p class="feedback-container__category--comments">
        {{ this.projects[0].project_feedback[2].comment }}
      </p>
    </div>
    <hr class="feedback-container__dividing-line">
    <div class="feedback-container__category">
      <p class="
        feedback-container__category--label
        feedback-container__category--label-overall
      ">
        Overall
      </p>
      <div class="progress-bar" id="bar-average">{{ this.findAverage() }}</div>
      <p class="
        feedback-container__category--comments
        feedback-container__category--comments-overall
      ">
        {{ this.projects[0].instructor_comments }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      projects: [],
      categories: ['JavaScript', 'React', 'Professionalism']
    }
  },
  props: {
    modData: Object
  },
  methods: {
    findAverage () {
      return 'Function placeholder'
    }
  },
  mounted () {
    this.projects = this.modData.data.attributes.student_projects
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/styles.scss';
  .feedback-container {
  }
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
