<template>
  <div class="feedback-container__category">
    <p class="feedback-container__category--label">
      <span class="s-h2">{{ projectFeedback.rubric_category_name }}</span>
    </p>
    <div class="progress-bar" id="bar1" ref="bar">
      <span class="progress-bar__score">
        {{ projectFeedback.score }}
      </span>
    </div>
    <p class="feedback-container__category--comments" @click="makeBigBar" s-text-body>
    <!-- <p class="feedback-container__category--comments" @click="testing" s-text-body> -->
      {{ projectFeedback.comment }}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis, cupiditate deserunt, esse eum illo, iure labore nesciunt officia officiis quidem ullam voluptate voluptatum! Consectetur corporis dolorum ducimus ex repellendus.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    projectFeedback: Object
  },
  methods: {
    makeBigBar () {
      console.log('hello!')
      console.log(this.$refs.bar)
      this.$refs.bar.style.width = 200
      const elem = document.getElementById('bar1')
      console.log('width of element:', elem.style.width)
      elem.innerText = 'testing'
    },
    testing () {
      const elem = document.getElementById('bar1')
      const width = 20
      console.log('setting width')
      elem.style.width = '150px'
      console.log(elem, width)
      // const id = setInterval(frame, 10);
      // frame () {
      //   if (width >= 100) {
      //     clearInterval(id);
      //   } else {
      //     width++;
      //     elem.style.width = width + '%';
      //     elem.innerHTML = width * 1  + '%';
      //   }
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/styles.scss';

  // .progress-bar {
  //   display: inline;
  //   width: 100px;
  //   background-color: $turing-yellow;
  //   margin-left: 15px;
  //   font-size: 1.25rem;
  //   font-weight: bold;
  // }
</style>
