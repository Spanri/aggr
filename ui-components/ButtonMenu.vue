<template>
  <nuxt-link class="ui-button-menu" :to="href">
    <slot class="ui-button-menu__slot" />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "UiButtonMenu",
  props: {
    href: String,
  },
});
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  cursor: pointer;
  background: $color-accent;
  color: $color-gray-light;
}

.ui-button-menu {
  all: unset;
  border: 0;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid transparent;
  color: $color-gray-medium;

  &:hover {
    cursor: pointer;
    background: $color-accent;
    color: $color-gray-light;
  }
}
</style>