<template>
  <div>
    <h1>Module number {{ moduleId }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Module',
  props: {
    moduleId: String
    // ,
    // findModuleClicked: Function
  }
}

</script>

<style scoped>

</style>
