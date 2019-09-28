<template>
  <form class="auth">
    <h1 class="auth__title">Вход</h1>
    <label>Номер телефона</label>
    <input v-model="username" required type="text" placeholder="Введите номер телефона">
    <label>Пароль</label>
    <input v-model="password" required type="password" placeholder="Введите пароль">
    <hr>
    <button type="submit">
      Войти
    </button>
  </form>
</template>

<script>
import {
  AUTH_REQUEST,
} from '../store/mutations-type';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      const { username, password, } = this;
      this.$store.dispatch(AUTH_REQUEST, { username, password, }).then(() => {
        // this.$router.push('/home');
        console.log(this.$store.getters.isAuthenticated);
      });
    },
  },
};
</script>

<style scoped>
.auth {
  height: 527px;
  width: 450px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.auth__title {
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 50px;
  font-size: 36px;
}
</style>
