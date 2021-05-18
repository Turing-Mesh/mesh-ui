<template>
  <nav class="projects-container">
    <router-link to="/project-1" class="project">Project 1</router-link>
    <router-link to="/project-2" class="project">Project 2</router-link>
    <router-link to="/project-3" class="project">Project 3</router-link>
    <router-link to="/project-4" class="project">Project 4</router-link>
<!--    <router-view />-->
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
  font-family: $roboto;
  font-size: 1.5rem;
}

a.project {
  padding: 10px;
  text-align: center;

  &:hover {
    background-color: $turing-yellow;
  }
}

.project {
  padding: 10px;
  text-align: center;

  &:hover {
    background-color: $turing-yellow;
  }
}

.router-link-active {
  background-color: $turing-yellow;
}

</style>
