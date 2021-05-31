<template>
  <form id="form"  @click.prevent="createFeedback">
    <div class="upper-project">
      <h3 class="project-name">
        <em>
<!--       We will need to find the project name somehow   {{ project.name }}-->
          Project Name goes here
        </em>
      </h3>
      <div class="feedback-container__category">
        <div class="instr-form">
          <div class="instr-form-row">
            <span class="s-h2 instr-form-row__item">
              {{ this.$store.state.form.data.attributes.rubric_template[0].rubric_category_name }}
            </span>
            <div class="instr-form-row__item">
              <!--    each input will need a name, so we can collect the data before handing over to the fetch POST request -->
              <label for="num-field-1">Numerical Score:</label>
              <br>
              <input
                id="num-field-1"
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

    <hr class="feedback-container__dividing-line">

    <div class="instr-form-row">
          <span class="s-h2 instr-form-row__item--title">
            Overall
          </span>
      <div class="instr-form-row__item">
        <label for="num-field-5">Numerical Score:</label>
        <br>
        <input
          id="num-field-5"
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
          class="instr-form-row__item--input"
          rows="1"
          placeholder="How can this student improve?"
          required
        />
      </div>
    </div>

    <button class="s-button s-button-primary">Submit</button>
  </form>
</template>
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
    this.$store.dispatch('sendFeedback', this.createFeedback)
  }
}
</script>
