<template>
  <div class="feedback-container__category s-content">
    <p class="feedback-container__category--label">
      <span class="s-h2">{{ projectFeedback.rubric_category_name }}</span>
    </p>
    <div class="progress-bar" id="bar1">{{ projectFeedback.score }}</div>
    <p class="feedback-container__category--comments">
      {{ projectFeedback.comment }}
      Lorem ipsum dolor sit amet.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    projectFeedback: Object
  },
  created () {
    // console.log('category component created', this.projectFeedback)
  },
  updated () {
    // console.log('category component updated', this.projectFeedback)
  }
}
</script>
