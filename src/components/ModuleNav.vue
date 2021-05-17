<template>
  <section class="left-section">
    <router-link to="/mod-1" class="module">Module 1</router-link>
    <h1 class="module">Module 2</h1>
    <h1 class="module">Module 3</h1>
    <h1 class="module">Module 4</h1>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

a.module {
  color: $turing-red;
  text-align: center;
  line-height: 70px;

  &:hover {
    text-decoration: underline;
    background-color: $turing-blue;
  }
}

.module {
  text-decoration: unset;
  margin: 0;
  text-align: center;
  line-height: 70px;

  &:hover {
    text-decoration: underline;
    background-color: $turing-blue;
  }
}

.router-link-active {
  background-color: $turing-blue;
}

</style>
