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
        <button class="btn">Module 1</button>
    </router-link>

    <router-link class="module" :to="{
      name: 'Module',
      params: { id: 2}
    }">
      <button class="btn">Module 2</button>
    </router-link>

    <router-link class="module" :to="{
      name: 'Module',
      params: { id: 3}
    }">
      <button class="btn">Module 3</button>
    </router-link>

    <router-link class="module" :to="{
      name: 'Module',
      params: { id: 4}
    }">
      <button class="btn">Module 4</button>
    </router-link>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '@/styles/styles.scss';

a.module {
  //display: grid;
  //grid-template-rows: repeat(4, 1fr);
  //margin: 0;
  //text-align: center;
  ////height: 70px;
  ////line-height: 70px;

  &:hover {
    text-decoration: none;
  }
}

.router-link-active .btn {
  //background-color: $turing-blue;
  background: #036575;
  color: #12F1FC;
}

.btn {
  border-radius: 50px;
  background: #4C4D4F;
  color: whitesmoke;
  height: auto;
  font-size: 1.5rem;
  font-weight: 500;
  width: 50%;
  padding: 20px;
  text-transform: capitalize;
}

</style>
