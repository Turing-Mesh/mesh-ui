<template>
  <div class="feedback-container__category">
    <p class="feedback-container__category--label">{{ projectFeedback.rubric_category_name }} </p>
    <div class="progress-bar" id="bar1">{{ projectFeedback.score }}</div>
    <p class="feedback-container__category--comments">
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

<style lang="scss" scoped>
  @import '@/styles/styles.scss';

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
</style>
