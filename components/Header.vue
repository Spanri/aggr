<template>
  <header class="header">
    <Logo class="header__logo" />
    <Nav class="header__nav" :items="items" />
    <div class="header__profile">профиль</div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'headerComponent',

  components: {
    Nav: () => import('@/components/Nav.vue'),
    Logo: () => import('@/assets/svg/logo.svg'),
  },

  data() {
    return {
      items: [
        { title: "пункт 1", href: '/', },
        { title: "пункт 2", href: '/', },
        { title: "пункт 3", href: '/', },
        { title: "пункт 4", href: '/', },
        { title: "пункт 5", href: '/', },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__logo {
      height: 16px;
      width: 16px;
    }

  }
</style>
