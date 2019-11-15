<template>
  <header class="header">
    <Logo class="header__logo" />
    <Nav class="header__nav" :items="items" />
    <div 
      class="header__profile header__profile_false"
    >
      <span class="header__profile-text">Войти</span>
      <LogoProfile class="header__profile-logo"/>
    </div>
    <!-- <div 
      class="header__profile header__profile_true"
    >
      <span class="header__profile-text">Войти</span>
      <LogoProfile class="header__profile-logo"/>
    </div> -->
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'headerComponent',

  components: {
    Logo: () => import('@/assets/svg/logo.svg'),
    Nav: () => import('@/components/Nav.vue'),
    LogoProfile: () => import('@/assets/svg/logoProfile.svg'),
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

    max-width: 1440px;
    margin: 0 auto;

    &__logo {
      height: 42px;
      margin: 30px;
    }

    &__nav {
      align-items: center;
    }

    &__profile {

      &-logo {
        height: 35px;
        margin: 30px;
      }

    }

  }
</style>
