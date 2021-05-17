<template>
  <nav class="projects-container">
    <router-link to="/Project-1" class="project">Project 1</router-link>
    <h2 class="project">Project 2</h2>
    <h2 class="project">Project 3</h2>
    <h2 class="project">Project 4</h2>
    <router-view />
  </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

.projects-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
}

.project {
  border: 1px solid black;
  padding: 10px;
  text-align: center;

  &:hover {
    background-color: $turing-yellow;
  }
}

</style>
