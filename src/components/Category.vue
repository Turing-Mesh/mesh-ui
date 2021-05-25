<template>
  <div class="feedback-container__category">
    <div class="feedback-container__category-item">
      <span class="s-h2 feedback-container__category-item--label">
      {{ projectFeedback.rubric_category_name }}
      </span>
      <div class="feedback-container__category-item--label progress-bar" :style="{ width: projectFeedback.score * 80 + 'px'}">
        <div class="progress-bar__score-wrapper">
          <div class="progress-bar__score-wrapper--number">
            {{ projectFeedback.score }}
          </div>
        </div>
      </div>
    </div>
    <p class="feedback-container__category--comments s-text-body">
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
