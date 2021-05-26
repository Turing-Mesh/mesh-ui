<template>
  <div class="student-data">
    <p>{{ this.$store.state.currentStudent.attributes.first_name + " " + this.$store.state.currentStudent.attributes.last_name}}</p>
    <p>Student ID: {{ this.$store.state.currentStudent.attributes.user_id }}</p>
    <p>Cohort {{ this.$store.state.currentStudent.attributes.current_cohort }}</p>
  </div>
</template>

<script>
export default {
  name: 'StudentData'
}
</script>

<style scoped>

</style>
