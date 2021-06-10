<template>
  <form id="form">
    <h2 class="project-name s-h2">
<!--      <a class="outside-link" :href="`https://backend.turing.edu/module3/projects/${slug(projectName)}`" target="_blank">-->
      <a class="outside-link" href="https://backend.turing.edu/module3/projects/sweater_weather/" target="_blank">
        <em class="outside-link" ><span class="editing">Editing: </span>Sweater Weather</em>
      </a>
    </h2>
    <div class="tricolor">
      <div class="yellow"></div>
      <div class="red"></div>
      <div class="blue"></div>
    </div>
    <div class="">
      <div class="feedback-container__category">
        <div class="instr-form">
          <div class="instr-form-row">
            <span class="s-h2 instr-form-row__item">
              {{ this.$store.state.form.data.attributes.rubric_template[0].rubric_category_name }}
            </span>
            <div class="instr-form-row__item">
              <!--    todo ==> use v-for to dynamically create these categories so we have all categories for the rubric -->
              <label for="num-field-1">Numerical Score:</label>
              <br>
              <input
                id="num-field-1"
                v-model="first_score"
                class="feedback-row--progress instr-form-row__item--input"
                type="number"
                min="1"
                max="4"
                step="0.5"
                placeholder="Whole or half numbers only"
              />
              <br>
              <label for="text-field-1">Comments:</label>
              <br>
              <textarea
                id="text-field-1"
                v-model="first_comment"
                class="instr-form-row__item--input"
                rows="1"
                placeholder="How can this student improve?"
                required
              />
            </div>
          </div>

          <div class="instr-form-row">
            <span class="s-h2 instr-form-row__item">
              {{ this.$store.state.form.data.attributes.rubric_template[1].rubric_category_name }}
            </span>
            <div class="instr-form-row__item">
              <label for="num-field-2">Numerical Score:</label>
              <br>
              <input
                id="num-field-2"
                v-model="second_score"
                class="feedback-row--progress instr-form-row__item--input"
                type="number"
                min="1"
                max="4"
                step="0.5"
                placeholder="Whole or half numbers only"
              />
              <br>
              <label for="text-field-2">Comments:</label>
              <br>
              <textarea
                id="text-field-2"
                v-model="second_comment"
                class="instr-form-row__item--input"
                rows="1"
                placeholder="How can this student improve?"
                required
              />
            </div>
          </div>

          <div class="instr-form-row">
            <span class="s-h2 instr-form-row__item">
              {{ this.$store.state.form.data.attributes.rubric_template[2].rubric_category_name }}
            </span>
            <div class="instr-form-row__item">
              <label for="num-field-3">Numerical Score:</label>
              <br>
              <input
                id="num-field-3"
                v-model="third_score"
                class="feedback-row--progress instr-form-row__item--input"
                type="number"
                min="1"
                max="4"
                step="0.5"
                placeholder="Whole or half numbers only"
              />
              <br>
              <label for="text-field-3">Comments:</label>
              <br>
              <textarea
                id="text-field-3"
                v-model="third_comment"
                class="instr-form-row__item--input"
                rows="1"
                placeholder="How can this student improve?"
                required
              />
            </div>
          </div>

          <div class="instr-form-row">
            <span class="s-h2 instr-form-row__item">
              {{ this.$store.state.form.data.attributes.rubric_template[3].rubric_category_name }}
            </span>
            <div class="instr-form-row__item">
              <label for="num-field-4">Numerical Score:</label>
              <br>
              <input
                id="num-field-4"
                v-model="fourth_score"
                class="feedback-row--progress instr-form-row__item--input"
                type="number"
                min="1"
                max="4"
                step="0.5"
                placeholder="Whole or half numbers only"
              />
              <br>
              <label for="text-field-4">Comments:</label>
              <br>
              <textarea
                id="text-field-4"
                v-model="fourth_comment"
                class="instr-form-row__item--input"
                rows="1"
                placeholder="How can this student improve?"
                required
              />
            </div>
          </div>

          <div class="instr-form-row">
            <span class="s-h2 instr-form-row__item">
              {{ this.$store.state.form.data.attributes.rubric_template[4].rubric_category_name }}
            </span>
            <div class="instr-form-row__item">
              <label for="num-field-5">Numerical Score:</label>
              <br>
              <input
                id="num-field-5"
                v-model="fifth_score"
                class="feedback-row--progress instr-form-row__item--input"
                type="number"
                min="1"
                max="4"
                step="0.5"
                placeholder="Whole or half numbers only"
              />
              <br>
              <label for="text-field-5">Comments:</label>
              <br>
              <textarea
                id="text-field-5"
                v-model="fifth_comment"
                class="instr-form-row__item--input"
                rows="1"
                placeholder="How can this student improve?"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>

<!--    <hr class="feedback-container__dividing-line">-->

    <div class="instr-form-row">
          <span class="s-h2 instr-form-row__item--title">
            Overall
          </span>
      <div class="instr-form-row__item">
<!--        <label for="num-field-5">Numerical Score:</label>-->
<!--        <br>-->
<!--        <input-->
<!--          id="num-field-5"-->
<!--          class="feedback-row&#45;&#45;progress instr-form-row__item&#45;&#45;input"-->
<!--          type="number"-->
<!--          min="1"-->
<!--          max="4"-->
<!--          step="0.5"-->
<!--          placeholder="Whole or half numbers only"-->
<!--        />-->
        <h4>Overall Score:  {{ overallScoreCalc() }}</h4>
        <br>
        <label for="text-field-6">Comments:</label>
        <br>
        <textarea
          id="text-field-6"
          v-model="overall_comments"
          class="instr-form-row__item--input"
          rows="1"
          placeholder="How can this student improve?"
          required
        />
      </div>
    </div>

    <button class="s-button s-button-primary" @click.prevent="submitFeedback">Submit</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      feedback: {},
      first_score: null,
      second_score: null,
      third_score: null,
      fourth_score: null,
      fifth_score: null,
      first_comment: null,
      second_comment: null,
      third_comment: null,
      fourth_comment: null,
      fifth_comment: null,
      overall_comments: null
    }
  },
  methods: {
    submitFeedback () {
      this.feedback = {
        project_template_id: this.$store.state.form.data.id,
        instructor_comments: this.overall_comments,
        project_feedback: [
          {
            rubric_template_category_id: this.$store.state.form.data.attributes.rubric_template[0].rubric_category_template_id,
            score: this.first_score,
            comment: this.first_comment
          },
          {
            rubric_template_category_id: this.$store.state.form.data.attributes.rubric_template[1].rubric_category_template_id,
            score: this.second_score,
            comment: this.second_comment
          },
          {
            rubric_template_category_id: this.$store.state.form.data.attributes.rubric_template[2].rubric_category_template_id,
            score: this.third_score,
            comment: this.third_comment
          },
          {
            rubric_template_category_id: this.$store.state.form.data.attributes.rubric_template[3].rubric_category_template_id,
            score: this.fourth_score,
            comment: this.fourth_comment
          },
          {
            rubric_template_category_id: this.$store.state.form.data.attributes.rubric_template[4].rubric_category_template_id,
            score: this.fifth_score,
            comment: this.fifth_comment
          }
        ]
      }
      this.$store.dispatch('sendModule', this.$route.params.id)
      this.$store.dispatch('sendFeedback', this.feedback)
    },
    overallScoreCalc () {
      return (Number(this.first_score) + Number(this.second_score) + Number(this.third_score) + Number(this.fourth_score) + Number(this.fifth_score)) / this.$store.state.form.data.attributes.rubric_template.length
    }
  }
}
</script>
