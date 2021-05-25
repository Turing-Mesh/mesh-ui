<template>
  <div>
    <h3 class="project-name"><em>{{ project.name }}</em></h3>
    <Category :projectFeedback="project.project_feedback[0]"/>
    <Category :projectFeedback="project.project_feedback[1]"/>
    <Category :projectFeedback="project.project_feedback[2]"/>
    <Category :projectFeedback="project.project_feedback[3]"/>

    <hr class="feedback-container__dividing-line">

    <div class="overall-container">
      <span class="s-h2 feedback-container__category--label">Overall</span>
      <div class="progress-bar-overall" id="bar-average">
        <div class="progress-bar-overall__score-wrapper">
          <div class="progress-bar-overall__score-wrapper--number">
            {{ project.average_score }}
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
  components: {
    Category
  },
  props: {
    project: Object
  }
}
</script>
