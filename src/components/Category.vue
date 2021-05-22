<template>
  <div class="feedback-container__category">
    <p class="feedback-container__category--label">
      <span class="s-h2">{{ projectFeedback.rubric_category_name }}</span>
    </p>
    <!-- <div class="progress-bar" id="bar-{{projectFeedback.id}}" ref="bar"> -->
    <div class="progress-bar" :id="projectFeedback.id" :ref="projectFeedback.id">
    <!-- <div class="progress-bar" :id="projectFeedback.id" ref="bar"> -->
      <div class="progress-bar__score">
        {{ projectFeedback.score }}
      </div>
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
  created () {
    console.log('Category created')
    console.log('projectFeedback.id: ', this.projectFeedback.id)
    // const id = this.projectFeedback.id.toString()
    // const elem = document.getElementById(`${id}`)
    // const myRef = this.projectFeedback.id
    const elem = this.$refs.projectFeedback.id
    // const elem = document.getElementById(this.projectFeedback.id)
    console.log('yo yo elems: ', elem)
    // console.log('width of element:', elem.style.width)
    const newWidth = this.projectFeedback.score * 100
    // this.$refs[elem].style.width = 100 * this.projectFeedback.score
    elem.style.width = `${newWidth}px`
    // elems.forEach(elem => {
    //   const newWidth = this.projectFeedback.score * 100
    //   elem.style.width = `${newWidth}px`
    // elem.style.width = '500px'
    // })
  },
  methods: {
    makeBigBar () {
      console.log('hello!')
      console.log('this.$refs.bar', this.$refs.bar)
      // this.$refs.bar.style.width = 200
      this.$refs.bar.style.width = 100 * this.projectFeedback.score
      // const elem = document.getElementById('bar1')
      const elems = document.getElementsByClassName('progress-bar')
      console.log('elems: ', elems)
      // console.log('width of element:', elem.style.width)
      elems.forEach(elem => {
        const newWidth = this.projectFeedback.score * 100
        elem.style.width = `${newWidth}px`
        // elem.style.width = '500px'
      })
      // elem.innerText = 'testing'
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

  .progress-bar__score {
    margin: 0;
    vertical-align: center;
  }
</style>
