<template>
  <section class="feedback-container">
    <div class="feedback-container__category">
      <p class="feedback-container__category--label">{{this.categories[0]}}</p>
      <div class="progress-bar" id="bar1">3.5</div>
      <p class="feedback-container__category--comments">
        Solid work here! Blah blah.
      </p>
    </div>
    <div class="feedback-container__category">
      <p class="feedback-container__category--label">{{this.categories[1]}}</p>
      <div class="progress-bar" id="bar2">2.5</div>
      <p class="feedback-container__category--comments">
        Some comments here about this category.
      </p>
    </div>
    <div class="feedback-container__category">
      <p class="feedback-container__category--label">{{this.categories[2]}}</p>
      <div class="progress-bar" id="bar3">3</div>
      <p class="feedback-container__category--comments">
        Looking good. Just make sure to foo!
      </p>
    </div>
    <div class="feedback-container__category">
      <p class="
        feedback-container__category--label
        feedback-container__category--label-overall
      ">
        Overall
      </p>
      <div class="progress-bar" id="bar-average">3</div>
      <p class="
        feedback-container__category--comments
        feedback-container__category--comments-overall
      ">
        You like cats because they are fat and fluffy inspect anything brought into the house, yet flee in terror at cucumber discovered on floor ask for petting trip on catnip. Run off table persian cat jump eat fish. Loves cheeseburgers meowing chowing and wowing and human is behind a closed door, emergency! abandoned! meeooowwww!!!.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      categories: ['JavaScript', 'React', 'Professionalism']
    }
  }
}
</script>

<style lang="scss" scoped>
  .feedback-container {
  }
  .feedback-container__category {
    width: 400px;
    height: 40px;
  }
  .feedback-container__category--label {
    display: inline;
  }
  .progress-bar {
    display: inline;
    width: 100px;
    background-color: aqua;
  }
</style>
