<template>
  <div class="container">
    <div>
      <form v-if="!$store.getters.isAuthenticated" class="login" @submit.prevent="login">
        <h1>Sign in</h1>
        <label>User name</label>
        <input v-model="username" required type="text" placeholder="Snoopy">
        <label>Password</label>
        <input v-model="password" required type="password" placeholder="Password">
        <hr>
        <button type="submit">
          Login
        </button>
      </form>
      <div v-else>
        <p>Авторизовались походу</p>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue';
import {
  AUTH_REQUEST,
} from '../store/mutations-type';

export default {
  // components: {
  //   Logo
  // },
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
