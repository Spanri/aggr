<template>
  <div class="signup-wrapper">
    <div class="signup">
      <nav class="signup__nav">
        <span
          v-for="item in 4"
          :key="item"
          class="signup__nav-item"
          :class="signUpPhase == `SignUp${item}` ? 'signup__nav-item_selected' : ''"
        >
          {{ item }}
        </span>
      </nav>
      <h1 class="signup__title">
        Регистрация
      </h1>
      <component :is="signUpPhase" @next="next" />
    </div>
  </div>
</template>

<script>
// import {
//   required,
// } from 'vuelidate/lib/validators';
// import {
//   AUTH_REQUEST,
// } from '../store/mutations-type';

export default {
  name: 'Signup',
  components: {
    SignUp1: () => import('@/components/Signup1.vue'),
    SignUp2: () => import('@/components/Signup2.vue'),
    // SignUp3: () => import('@/components/SignUp3.vue'),
  },
  data() {
    return {
      signUpPhase: 'Signup1',
    };
  },
  methods: {
    next(component) {
      this.signUpPhase = component;
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        alert('Ошибок в заполнении формы нет, но и вход пока не реализован.');
        // const { username, password, } = this;
        // this.$store.dispatch(AUTH_REQUEST, { username, password, }).then(() => {
        //   // this.$router.push('/home');
        //   console.log('isAuthenticated', this.$store.getters.isAuthenticated);
        // });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.signup {
  margin: 70px auto;
  height: auto;
  width: 450px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  &-wrapper {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  &__title {
    padding: 20px;
    padding-top: 30px;
    padding-bottom: 50px;
    font-size: 30px;
    font-size: responsive 28px 36px;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 300px;
    margin-top: 30px;

    &-item {
      border: 2px solid #10B2D6;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      color:#10B2D6;
      background-color: white;
      padding: 2px;
      font-family: Ubuntu;
      font-size: 22px;
      font-size: responsive 20px 24px;

      &_selected {
        background-color: #10B2D6;
        border-color: white;
        color: white;
      }
    }
  }
}
</style>
