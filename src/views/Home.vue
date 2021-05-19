<template>
  <div class="home">
    This is home
    this is home
    <h2>this is home</h2>
    <div>Click on a module</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import StudentFeedback from '@/components/StudentFeedback.vue'

export default {
  name: 'Home',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    // StudentFeedback
  }
}
</script>

<style scoped>
.home {
  border: 1px solid red;
}

.greeting {
  margin: 0 40px;
  font-size: 1.2rem;
}

.router-link-active .module-btn {
  //background-color: $turing-blue;
  background: #036575;
  color: #12F1FC;
}

.module-btn {
  border-radius: 50px;
  background: #4C4D4F;
  color: whitesmoke;
  height: auto;
  font-size: 1.4rem;
  font-weight: 600;
  width: 50%;
  padding: 20px;
  text-transform: uppercase;
}
</style>
