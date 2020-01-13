<template>
  <div class="login-wrapper">
    <form class="login" @submit.prevent="submit">
      <h1 class="login__title">Вход</h1>
      <p class="login__input-title">Номер телефона *</p>
      <Input
        v-model="username"
        :v="$v.username"
        class="input login__input login__input_username"
        placeholder="Введите номер телефона"
      />
      <!-- <b-form-input
        v-model="$v.username.$model"
        class="input login__input"
        type="text"
        placeholder="Введите номер телефона"
        :state="$v.username.$dirty ? !$v.username.$error : null"
        :aria-describedby="`login__invalid-feedback-username`"
      />-->
      <b-form-invalid-feedback
        :id="`login__invalid-feedback-username`"
      >Обязательное поле, только цифры.</b-form-invalid-feedback>
      <p class="login__input-title">Номер телефона *</p>
      <Input
        v-model="password"
        :v="$v.password"
        class="input login__input login__input_password"
        placeholder="Введите пароль"
        type="password"
        :aria-describedby="`login__invalid-feedback-password`"
      />
      <!-- <b-form-input
        v-model="$v.password.$model"
        class="input login__input"
        type="password"
        placeholder="Введите пароль"
        :state="$v.password.$dirty ? !$v.password.$error : null"
        :aria-describedby="`login__invalid-feedback-password`"
      />-->
      <b-form-invalid-feedback :id="`login__invalid-feedback-password`">Обязательное поле.</b-form-invalid-feedback>
      <button class="button login__button" type="submit">Войти</button>
      <br />
      <div class="login__link_password">
        <nuxt-link to>Забыли пароль?</nuxt-link>
      </div>
      <span class="login__link_signup">
        Нет аккаунта?
        <nuxt-link to="signup">Зарегистрироваться</nuxt-link>
      </span>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
// import {
//   AUTH_REQUEST,
// } from '../store/mutations-type';

export default {
  name: "Login",

  layout: "empty",

  components: {
    Input: () => import("@/ui-components/Input.vue")
  },

  data() {
    return {
      username: "",
      password: ""
    };
  },

  validations: {
    username: {
      required,
      type: Number
    },
    password: {
      required
    }
  },

  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        alert("Ошибок в заполнении формы нет, но и вход пока не реализован.");
        // const { username, password, } = this;
        // this.$store.dispatch(AUTH_REQUEST, { username, password, }).then(() => {
        //   // this.$router.push('/home');
        //   console.log('isAuthenticated', this.$store.getters.isAuthenticated);
        // });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  height: 537px;
  width: 450px;
  box-shadow: 0 0 20px rgba($black, 0.25);
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

  &__input {
    &-title {
      color: #8d8d8d;
      text-align: left;
      font-size: 16px;
      font-size: responsive 13px 16px;
      margin: 0 auto;
      width: 300px;
    }
  }

  &__button {
    padding: 15px 45px;
    background: $white;
    border: 2px solid #31b0ce;
    box-sizing: border-box;
    border-radius: 25px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #10b2d6;
  }

  &__link_password {
    padding: 20px 0;
  }
}

.invalid-feedback {
  margin-top: -40px;
  margin-bottom: 18px;

  font-family: Roboto;
  font-size: calc(13px + 3 * ((100vw - 420px) / 860));
}
</style>
