<template>
  <div class="student-data">
    <span class="s-h3">{{ currentStudent.attributes.first_name + " " + currentStudent.attributes.last_name}}</span>
    <span class="s-text-body">Student ID: {{ currentStudent.attributes.user_id }}</span>
    <span class="s-text-body">Cohort {{ currentStudent.attributes.current_cohort }}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'StudentData',
  computed: {
    ...mapState([
      'currentStudent'
    ])
  }
}
</script>

<style scoped>
.student-data {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 5px solid #12F1FCFF;
  margin-top: 40px;
}
</style>
