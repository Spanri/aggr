<template>
  <nav class="nav">
    <ButtonMenu
      v-for="(item, index) in items"
      :key="index" :href="item.href"
      class="nav__item"
    >
      {{ item.title }}
    </ButtonMenu>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'navComponent',

  components: {
    ButtonMenu: () => import('@/ui-components/ButtonMenu.vue'),
  },

  props: {
    items: Array,
  },
  
});
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
</style>