<template>
  <div class="header-wrapper">
    <header class="header">
      <Logo class="header__logo" />
      <HeaderNav class="header__nav" :items="items" />
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',

  components: {
    Logo: () => import('@/assets/svg/logo.svg'),
    HeaderNav: () => import('@/components/Header/HeaderNav.vue'),
    LogoProfile: () => import('@/assets/svg/logoProfile.svg'),
  },

  data() {
    return {
      items: [
        { title: "ПУНКТ 1", href: '/', },
        { title: "ПУНКТ 2", href: '/', },
        { title: "ПУНКТ 3", href: '/', },
        { title: "ПУНКТ 4", href: '/', },
        { title: "ПУНКТ 5", href: '/', },
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
    
    &-wrapper {
      background: $gray-light;
    }

    &__logo {
      height: 42px;
      margin: 20px;
    }

    &__nav {
      align-items: center;
    }

    &__profile {
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
        color: $white;
        transition: 0.3s;

        &-logo {
          width: 50px;
        }
      }

      &-logo {
        height: 35px;
        margin: 20px 20px 20px 10px;
      }

    }

  }
</style>
