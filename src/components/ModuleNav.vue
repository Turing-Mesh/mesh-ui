<template>
  <section class="left-section">
<!--    <router-link to="/mod-1" class="module">Module 1</router-link>-->
<!--    <router-link to="/mod-2" class="module">Module 2</router-link>-->
<!--    <router-link to="/mod-3" class="module">Module 3</router-link>-->
<!--    <router-link to="/mod-4" class="module">Module 4</router-link>-->
    <router-link class="module" :to="{
      name: 'Module',
      params: { id: 1}
    }">
      Module 1
    </router-link>

    <router-link class="module" :to="{
      name: 'Module',
      params: { id: 2}
    }">
      Module 2
    </router-link>

    <router-link class="module" :to="{
      name: 'Module',
      params: { id: 3}
    }">
      Module 3
    </router-link>

    <router-link class="module" :to="{
      name: 'Module',
      params: { id: 4}
    }">
      Module 4
    </router-link>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

a.module {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  margin: 0;
  text-align: center;
  height: 70px;
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
