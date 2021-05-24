<template>
  <div>
    <h3 class="project-name"><em>{{ project.name }}</em></h3>
    <Category :projectFeedback="project.project_feedback[0]"/>
    <Category :projectFeedback="project.project_feedback[1]"/>
    <Category :projectFeedback="project.project_feedback[2]"/>
    <Category :projectFeedback="project.project_feedback[3]"/>
    <hr class="feedback-container__dividing-line">
    <div class="feedback-container__category">
      <p class="
      feedback-container__category--label
      feedback-container__category--label-overall
    ">
        <span class="s-h2">Overall</span>
      </p>
      <div class="progress-bar" id="bar-average">{{ project.average_score }}</div>
      <p class="
      feedback-container__category--comments
      feedback-container__category--comments-overall
      s-text-body
    ">
        {{ project.instructor_comments }}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque eaque enim error nesciunt perspiciatis sapiente. Ad animi, aut, cumque dicta esse id illo ipsum libero nobis quibusdam saepe tempore!
      </p>
    </div>
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
