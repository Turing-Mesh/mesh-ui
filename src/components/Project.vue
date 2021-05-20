<template>
  <div>
    <Category :projectFeedback="project.project_feedback[0]"/>
    <Category :projectFeedback="project.project_feedback[1]"/>
    <Category :projectFeedback="project.project_feedback[2]"/>
    <hr class="feedback-container__dividing-line">
    <div class="feedback-container__category">
      <p class="
      feedback-container__category--label
      feedback-container__category--label-overall
    ">
        Overall
      </p>
      <div class="progress-bar" id="bar-average">AVERAGE SCORE</div>
      <p class="
      feedback-container__category--comments
      feedback-container__category--comments-overall
    ">
        {{ projects.instructor_comments }}
      </p>
    </div>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'Project',
  data () {
    return {
      projects: []
    }
  },
  components: {
    Category
  },
  props: {
    project: Object
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
