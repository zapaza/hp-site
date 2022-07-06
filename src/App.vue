<template>
  <div class="relative bg-zinc-800 min-h-screen">
     <CHeader />
      <router-view/>
  </div>
 
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CHeader from './components/CHeader.vue'

export default defineComponent({
    components: { CHeader }
});
</script>

<style>
  #app {
    min-height: 100vh;
  }
</style>