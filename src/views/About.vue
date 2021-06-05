<template>
  <div class="about s-content">
    <h1 class="s-h1">
      <span>{{ instructorAuth ? 'Instructor ' : 'Student ' }}</span>
      Profile
    </h1>
    <h2 class="s-h2">Name: {{ user.userName }} {{ user.lastName }}</h2>
    <h2 class="s-h2">Id: {{ user.userId }}</h2>
    <h2 class="s-h2">Current Cohort/Program: {{ user.currentCohort }} {{ user.program }}</h2>
    <h2 class="s-h2">Current Module: {{ user.currentModNum }}</h2>
    <h2 class="s-h2" v-if="user.currentProjNum">Current Project: {{ user.currentProjNum }}</h2>
    <br>
    <h3 class="date" v-if="!instructorAuth">You received feedback for Mod1/Project3 on June 1, 2021</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'loggedIn',
      'authenticated',
      'instructorAuth',
      'user'
    ])
  }
}
</script>
