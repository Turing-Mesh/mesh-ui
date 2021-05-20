<template>
  <div class="feedback-container__category s-content">
      <span class="s-h2 feedback-container__category--label">
        {{ projectFeedback.rubric_category_name }}
      </span>
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
  }
}
</script>
