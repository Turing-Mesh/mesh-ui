<template>
  <nav class="projects-container">
    <router-link class="project" :to="{
         name: 'Project',
         params: { id: $route.params.id, project_id: 1 }
       }">
      <button class="project-btn"><span class="project-tab">Project 1</span></button>
    </router-link>
    <router-link v-show="mod !== 4" class="project" :to="{
         name: 'Project',
         params: { id: $route.params.id, project_id: 2 }
       }">
      <button class="project-btn"><span class="project-tab">Project 2</span></button>
    </router-link>
    <router-link v-show="mod !== 4" class="project" :to="{
         name: 'Project',
         params: { id: $route.params.id, project_id: 3 }
       }">
      <button class="project-btn"><span class="project-tab">Project 3</span></button>
    </router-link>
    <router-link v-show="mod !== 4" class="project" :to="{
         name: 'Project',
         params: { id: $route.params.id, project_id: 4 }
       }">
      <button class="project-btn"><span class="project-tab">Project 4</span></button>
    </router-link>
  </nav>
</template>

<script>
export default {
  props: ['mod']
}

</script>
