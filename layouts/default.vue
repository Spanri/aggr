<template>
  <div class="app">
    <Header class="app__header" />
    <nuxt class="app__main"/>
    <Footer class="app__footer"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Default',
  components: {
    Header: () => import('@/components/Header.vue'),
    Footer: () => import('@/components/Footer.vue'),
  },
});
</script>
