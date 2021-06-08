<template>
  <div>
    <h2 class="project-name s-h2">
<!--      https://frontend.turing.edu/projects/module-3/niche-audience.html-->
      <a href="https://frontend.turing.edu/projects/module-3/niche-audience.html" target="_blank">
        <em class="outside-link" >{{ project.name }}</em>
      </a>
    </h2>
    <div class="tricolor">
      <div class="yellow"></div>
      <div class="red"></div>
      <div class="blue"></div>
    </div>
    <div class="">
      <div v-for="(projectData, index) in project.project_feedback" :key="index">
        <Category :projectFeedback="projectData"/>
      </div>
    </div>

    <hr class="feedback-container__dividing-line">

    <div class="overall-container">
      <span class="s-h2 feedback-container__category--label overall">Overall</span>
      <div class="progress-bar-overall" :class="barBackground" id="bar-average">
        <div class="progress-bar-overall__score-wrapper" :class="scoreWrapper">
          <div class="progress-bar-overall__score-wrapper--number">
            {{ Number(this.project.average_score).toFixed(2) }}
          </div>
        </div>
      </div>
    </div>
    <p class="feedback-container__category--comments s-text-body">
      {{ project.instructor_comments }}
    </p>
  </div>
</template>

<script>
import Category from '@/components/Category.vue'

export default {
  name: 'Project',
  data () {
    return {
    }
  },
  components: {
    Category
  },
  props: {
    project: Object
  },
  computed: {
    barBackground: function () {
      return {
        redbg: this.project.average_score <= 1,
        yellowbg: this.project.average_score > 1 && this.project.average_score < 3,
        greenbg: this.project.average_score >= 3
      }
    },
    scoreWrapper: function () {
      return {
        redwrap: this.project.average_score <= 1,
        yellowwrap: this.project.average_score > 1 && this.project.average_score < 3,
        greenwrap: this.project.average_score >= 3
      }
    }
    // underSlugify: function (name) {
    //   return name.split(' ').join('_').toLowerCase()
    // }
  },
  methods: {
    slug (name) {
      return name.split(' ').join('_').toLowerCase()
    }
  }
}
</script>
