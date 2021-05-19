<template>
  <div class="home">
    <div class="greeting">
      <h3>Welcome to Mesh.</h3>
      <p> Click on a module and then a project, to see your feedback.</p>
    </div>

    <div class="main">

      <section class="right-section">
        <StudentFeedback />
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import StudentFeedback from '@/components/StudentFeedback.vue'

export default {
  name: 'Home',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    StudentFeedback
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
.rotating {
  width: 150px;
  transition: transform 3s ease-in-out;
}
.rotating:hover {
  transform: rotateZ(360deg);
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

.left-section {
  border: 1px solid blue;
}
</style>
