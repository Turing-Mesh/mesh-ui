<template>
  <div class="feedback-container__category">
    <div class="feedback-row">
      <span class="s-h2 feedback-row--label">
      {{ projectFeedback.rubric_category_name }}
      </span>
      <div class="feedback-row--progress progress-bar" :style="{ width: projectFeedback.score * 80 + 'px'}">
        <div class="progress-bar__score-wrapper">
          <div class="progress-bar__score-wrapper--number">
            {{ projectFeedback.score }}
          </div>
        </div>
      </div>
    </div>
    <p class="feedback-row--comments s-text-body">
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
