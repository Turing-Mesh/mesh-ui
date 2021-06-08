<template>
  <div class="feedback-container__category">
    <div class="feedback-row">
      <span class="s-h2 feedback-row--label">
      {{ projectFeedback.rubric_category_name }}
      </span>
      <div class="feedback-row--progress progress-bar"
           :class="barBackground"
           :style="{ width: projectFeedback.score * 80 + 'px'}">
        <div class="progress-bar__score-wrapper"
             :class="scoreWrapper"
        >
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
  data () {
    return {
    }
  },
  computed: {
    barBackground: function () {
      return {
        red: this.projectFeedback.score <= 1,
        yellow: this.projectFeedback.score > 1 && this.projectFeedback.score < 3,
        green: this.projectFeedback.score >= 3
      }
    }
    // scoreWrapper: function () {
    //   return {
    //     red: this.projectFeedback.score <= 1,
    //     yellow: this.projectFeedback.score > 1 && this.projectFeedback.score < 3,
    //     green: this.projectFeedback.score >= 3
    //   }
    // }
  },
  props: {
    projectFeedback: Object
  }
}
</script>
