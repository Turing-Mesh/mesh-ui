<template>
  <div class="student-data">
    <span>{{ this.$store.state.currentStudent.attributes.first_name + " " + this.$store.state.currentStudent.attributes.last_name}}</span>
    <span>Student ID: {{ this.$store.state.currentStudent.attributes.user_id }}</span>
    <span>Cohort {{ this.$store.state.currentStudent.attributes.current_cohort }}</span>
  </div>
</template>

<script>
export default {
  name: 'StudentData'
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
