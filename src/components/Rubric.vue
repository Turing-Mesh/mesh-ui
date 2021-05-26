<template>
  <form>
    <div class="upper-project">
      <div class="feedback-container__category">
        <div class="feedback-row">
          <span class="s-h2 feedback-row--label">{{ this.$store.state.form.data.attributes.rubric_template[0].rubric_category_name }}<input placeholder="Comments" /></span>
          <input class="feedback-row--progress progress-bar" :style="{ width: 150 + 'px'}" placeholder="Score 1 - 4"/>
        </div>
        <div class="feedback-row">
          <span class="s-h2 feedback-row--label">{{ this.$store.state.form.data.attributes.rubric_template[1].rubric_category_name }}<input placeholder="Comments" /></span>
          <input class="feedback-row--progress progress-bar" :style="{ width: 150 + 'px'}" placeholder="Score 1 - 4"/>
        </div>
        <div class="feedback-row">
          <span class="s-h2 feedback-row--label">{{ this.$store.state.form.data.attributes.rubric_template[2].rubric_category_name }}<input placeholder="Comments" /></span>
          <input class="feedback-row--progress progress-bar" :style="{ width: 150 + 'px'}" placeholder="Score 1 - 4"/>
        </div>
        <div class="feedback-row">
          <span class="s-h2 feedback-row--label">{{ this.$store.state.form.data.attributes.rubric_template[3].rubric_category_name }}<input placeholder="Comments" /></span>
          <input class="feedback-row--progress progress-bar" :style="{ width: 150 + 'px'}" placeholder="Score 1 - 4"/>
        </div>
      </div>
    </div>
    <hr class="feedback-container__dividing-line">
    <div class="overall-container">
      <span class="s-h2 feedback-container__category--label overall">Overall</span>
      <div class="progress-bar-overall" id="bar-average">
        <div class="progress-bar-overall__score-wrapper">
          <div class="progress-bar-overall__score-wrapper--number">
            AVERAGE SCORE
          </div>
        </div>
      </div>
    </div>
    <input placeholder="Project comments" class="feedback-container__category--comments s-text-body">
  </form>
</template>
<button v-on:click="e => createFeedback(e)"></button>
<script>
export default {
  data () {
    return {
      overallComments: '',
      categoryScores: [],
      feedback: {
        project_template_id: 16,
        instructor_comments: 'Aw yeeeahhh',
        project_feedback: [
          {
            rubric_template_category_id: 3,
            score: 4.0,
            comment: 'yes sire'
          },
          {
            rubric_template_category_id: 4,
            score: 2.0,
            comment: 'gangsta shit'
          },
          {
            rubric_template_category_id: 5,
            score: 1.0,
            comment: 'wow'
          },
          {
            rubric_template_category_id: 6,
            score: 3.0,
            comment: 'holy moly'
          }
        ]
      }
    }
  },
  computed: {
    createFeedback: function () {
      const newFeedback = {
        // instructor_id: 10,
        // student_id: 201,
        project_template_id: 16,
        instructor_comments: 'Aw yeeeahhh',
        project_feedback: [
          {
            rubric_template_category_id: 3,
            score: 4.0,
            comment: 'yes sire'
          },
          {
            rubric_template_category_id: 4,
            score: 2.0,
            comment: 'gangsta shit'
          },
          {
            rubric_template_category_id: 5,
            score: 1.0,
            comment: 'wow'
          },
          {
            rubric_template_category_id: 6,
            score: 3.0,
            comment: 'holy moly'
          }
        ]
      }
      return newFeedback
    }
  },
  created () {
    // console.log(this.$store.state.form)
    this.$store.dispatch('sendFeedback', this.createFeedback)
  }
}
</script>
