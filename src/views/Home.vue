<template>
  <div class="home">
    This is home
    this is home
    <h2>this is home</h2>
   <StudentFeedback />
  </div>
</template>

<script>
// @ is an alias to /src
import StudentFeedback from '@/components/StudentFeedback.vue'

export default {
  name: 'Home',
  data () {
    return {
      id: this.$route.params.id,
      projects: [],
      module: null,
      moduleData: {}
    }
  },
  components: {
    StudentFeedback
  },
  watch: {
    $route (to, from) {
      this.module = parseInt(this.$route.fullPath.slice(-1))
      this.findModuleData()
    }
  },
  methods: {
    findAverage () {
      return 'Function placeholder'
    },
    async findModuleData () {
      const response = await fetch(`https://shrouded-citadel-55795.herokuapp.com/api/v1/students/1/student_projects?mod=${this.module}`)
      const data = await response.json()
      this.moduleData = data
    }
  }
}
</script>

<style scoped>
<<<<<<< HEAD
.home {
  border: 1px solid red;
}

=======
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
>>>>>>> parent of 28bdfcc... Move stuff and add modulenav back in
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
