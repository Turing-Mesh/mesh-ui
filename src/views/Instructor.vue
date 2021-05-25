<template>
  <div class="instructor-container">
    <h1>Instructor View</h1>

    <div class="instructor-main">
      <ul>
        <li class="student-name" v-for="(student, index) in students" :key="index">
          {{ student }}
        </li>
      </ul>
<!--      <section class="">-->
<!--        <h1>is this the main ?</h1>-->
<!--        <router-view-->
<!--          :key="$route.path"-->
<!--          :loggedIn="loggedIn"-->
<!--          :authenticated="authenticated"-->
<!--        />-->
<!--      </section>-->
    </div>
  </div>
</template>

<script>
// import ModuleNav from '@/components/ModuleNav'

export default {
  name: 'Instructor',
  data () {
    return {
      students: ['One Student', 'Two Student', 'Three Student']
    }
  },
  props: {
    loggedIn: Boolean,
    authenticated: Boolean,
    instructorAuth: Boolean
  },
  components: {
    // ModuleNav
  }
}
</script>
