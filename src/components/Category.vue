<template>
  <div class="feedback-container__category">
    <p class="feedback-container__category--label">
      <span class="s-h2">{{ projectFeedback.rubric_category_name }}</span>
    </p>
    <div class="progress-bar" :style="{ width: projectFeedback.score * 80 + 'px'}">
      <div class="progress-bar__score-wrapper">
        <div class="progress-bar__score-wrapper--number">
          {{ projectFeedback.score }}
        </div>
      </div>
    </div>
    <p class="feedback-container__category--comments" s-text-body>
      {{ projectFeedback.comment }}
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
