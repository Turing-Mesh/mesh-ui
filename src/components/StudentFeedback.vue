<template>
  <section class="feedback-container">
    <h3 data-cy="moduleTitle">Module {{ $route.params.id }}</h3>
    <ProjectNav />
    <Project />
    <section class="notes-container">
      <h2>Notes section goes here</h2>
    </section>
  </section>
</template>

<script>
import ProjectNav from '@/components/ProjectNav'
import Project from '@/components/Project'

export default {
  name: 'StudentFeedback',
  data () {
    return {
      projects: [],
      module: null,
      moduleData: {}
    }
  },
  components: {
    ProjectNav,
    Project
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/styles.scss';

  .feedback-container__category {
    margin-top: 15px;
  }
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
  #bar-average {
    background-color: $turing-blue;
  }
  .feedback-container__dividing-line {
    margin-top: 20px;
  }
</style>
