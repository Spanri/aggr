<template>
  <div class="login-wrapper">
    <form
      class="login"
      @submit.prevent="submit"
    >
      <h1 class="login__title">
        Вход
      </h1>
      <p class="login__input-title">
        Номер телефона *
      </p>
      <b-form-input
        v-model="$v.username.$model"
        class="input login__input"
        type="text"
        placeholder="Введите номер телефона"
        :state="$v.username.$dirty ? !$v.username.$error : null"
        :aria-describedby="`login__invalid-feedback-username`"
      />
      <b-form-invalid-feedback :id="`login__invalid-feedback-username`">
        Обязательное поле, только цифры.
      </b-form-invalid-feedback>
      <p class="login__input-title">
        Номер телефона *
      </p>
      <b-form-input
        v-model="$v.password.$model"
        class="input login__input"
        type="password"
        placeholder="Введите пароль"
        :state="$v.password.$dirty ? !$v.password.$error : null"
        :aria-describedby="`login__invalid-feedback-password`"
      />
      <b-form-invalid-feedback :id="`login__invalid-feedback-password`">
        Обязательное поле.
      </b-form-invalid-feedback>
      <button class="button login__button" type="submit">
        Войти
      </button>
      <br>
      <div class="login__link_password">
        <nuxt-link to="">
          Забыли пароль?
        </nuxt-link>
      </div>
      <span class="login__link_signup">
        Нет аккаунта?
        <nuxt-link to="signup">
          Зарегистрироваться
        </nuxt-link>
      </span>
    </form>
  </div>
</template>

<script>
import {
  required,
} from 'vuelidate/lib/validators';
// import {
//   AUTH_REQUEST,
// } from '../store/mutations-type';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  validations: {
    username: {
      required,
      type: Number,
    },
    password: {
      required,
    },
  },
  methods: {
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
.login {
  height: 537px;
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

  &__input {
    margin: 0 auto 50px;
    width: 300px;
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid #8D8D8D;
    padding: 10px 0;

    &-title {
      color: #8D8D8D;
      text-align: left;
      font-size: 16px;
      font-size: responsive 13px 16px;
      margin: 0 auto;
      width: 300px;
    }

    &:focus {
      border: 0;
      box-shadow: 0;
    }

    &::placeholder {
      color: #464646;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: rgb(52, 42, 199) !important;
    }
  }

  &__button {
    padding: 15px 45px;
    background: #FFFFFF;
    border: 2px solid #31B0CE;
    box-sizing: border-box;
    border-radius: 25px;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #10B2D6;
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
