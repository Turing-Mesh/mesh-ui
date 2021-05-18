<template>
  <nav class="projects-container">
    <router-link to="/project-1" class="project">
      <button class="project-btn">Project 1</button>
    </router-link>
    <router-link to="/project-2" class="project">
      <button class="project-btn">Project 2</button>
    </router-link>
    <router-link to="/project-3" class="project">
      <button class="project-btn">Project 3</button>
    </router-link>
    <router-link to="/project-4" class="project">
      <button class="project-btn">Project 4</button>
    </router-link>
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
}

a.project {
  padding: 10px;
  text-align: center;

  &:hover {
    //background-color: $turing-yellow;
  }
}

.project {
  padding: 10px;
  text-align: center;
  border: 5px solid transparent;
  width: auto;
  transition: border-color 0.3s;

  &:hover {
    //background-color: $turing-yellow;
    border-bottom: 5px solid $turing-blue;
  }
}

.project-btn {
  border: none;
  background: white;
  font-family: $roboto;
  font-size: 1.5rem;
}

.router-link-active {
  //background-color: $turing-yellow;
  border-bottom: 5px solid $turing-blue;
}

</style>
