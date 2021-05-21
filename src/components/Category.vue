<template>
  <div class="feedback-container__category">
    <p class="feedback-container__category--label">
      <span class="s-h2">{{ projectFeedback.rubric_category_name }}</span>
    </p>
    <div class="progress-bar" id="bar1">{{ projectFeedback.score }}</div>
    <p class="feedback-container__category--comments s-text-body">
      {{ projectFeedback.comment }}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis, cupiditate deserunt, esse eum illo, iure labore nesciunt officia officiis quidem ullam voluptate voluptatum! Consectetur corporis dolorum ducimus ex repellendus.
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
