<template>
  <section class="left-section">
    <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 1 }
       }">
      <button class="module-btn">Module 1</button>
    </router-link>

    <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 2 }
       }">
      <button class="module-btn">Module 2</button>
    </router-link>

    <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 3 }
       }">
      <button class="module-btn">Module 3</button>
    </router-link>

    <router-link class="module" :to="{
         name: 'StudentFeedback',
         params: { id: 4 }
       }">
      <button class="module-btn">Module 4</button>
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
.router-link-active .module-btn {
  //background-color: $turing-blue;
  background: #036575;
  color: #12F1FC;
}
.module-btn {
  border-radius: 50px;
  background: #4C4D4F;
  color: whitesmoke;
  height: auto;
  font-size: 1.4rem;
  font-weight: 600;
  width: 50%;
  padding: 20px;
  text-transform: uppercase;
}
</style>
