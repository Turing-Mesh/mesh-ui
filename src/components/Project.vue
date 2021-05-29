<template>
  <div>
    <h2 class="project-name s-h2"><em>{{ project.name }}</em></h2>
    <div class="upper-project">
      <Category :projectFeedback="project.project_feedback[0]"/>
      <Category :projectFeedback="project.project_feedback[1]"/>
      <Category :projectFeedback="project.project_feedback[2]"/>
      <Category :projectFeedback="project.project_feedback[3]"/>
    </div>

    <hr class="feedback-container__dividing-line">

    <div class="overall-container">
      <span class="s-h2 feedback-container__category--label overall">Overall</span>
      <div class="progress-bar-overall" id="bar-average">
        <div class="progress-bar-overall__score-wrapper">
          <div class="progress-bar-overall__score-wrapper--number">
            {{ Number(this.project.average_score).toFixed(2) }}
          </div>
        </div>
      </div>
    </div>
    <p class="feedback-container__category--comments s-text-body">
      {{ project.instructor_comments }}
    </p>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'Project',
  data () {
    return {
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
