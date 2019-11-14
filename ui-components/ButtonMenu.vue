<template>
  <nuxt-link class="button" :to="href">
    <slot class="button__slot" />
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "ButtonMenu",
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

.button {
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