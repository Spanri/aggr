<template>
  <div class="container">
    <div v-if="!$store.getters.isAuthenticated" class="auth" @submit.prevent="login">
      <Auth />
    </div>
    <div v-else class="authenticated">
      <p>Авторизовались походу</p>
      <!-- <Header></Header>
      <router-view></router-view>
      <Footer></Footer> -->
    </div>
  </div>
</template>

<script>
import Auth from '~/components/Auth.vue';

export default {
  components: {
    Auth,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
