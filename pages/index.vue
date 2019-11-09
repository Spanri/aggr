<template>
  <div class="container">
    Главная
    <Button>Кнопочка</Button>
    <router-link to="login">
      Войти
    </router-link>
    <!-- <Login v-if="!$store.getters.isAuthenticated" /> -->
    <!-- <div v-else>
      <p>Авторизовались походу</p>
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div> -->
  </div>
</template>

<script>
// import Login from '~/components/Login.vue';

export default {
  name: 'Index',
  components: {
    // Login,
    Button: () => import('@/ui-components/Button'),
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu&display=swap');

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

::placeholder {
  color: gray;
}
</style>
