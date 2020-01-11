<template>
  <form
class="signup1" @submit.prevent="submit"
>
    <div class="input-block-wrapper">
      <form-group
        v-for="(block, index) in blocks"
        :key="index"
        class="input-block"
      >
        <p
          class="input-block__title"
          :class="
            block.model == 'passwordRepeat' ? 'input-block__title-password' : ''
          "
          v-html="block.title"
        />
        <b-form-input
          v-model="$v[block.model].$model"
          class="input-block__input"
          :type="
            block.model == 'password' || block.model == 'passwordRepeat'
              ? 'password'
              : 'text'
          "
          :state="$v[block.model].$dirty ? !$v[block.model].$error : null"
          :aria-describedby="`input-block__invalid-feedback-${block.model}`"
        />
        <b-form-invalid-feedback
          :id="`input-block__invalid-feedback-${block.model}`"
        >
          {{ block.error }}
        </b-form-invalid-feedback>
        <p
v-if="block.model == 'password'" class="input-block__description"
>
          Пароль должен содержать не менее 8 символов, должны присутствоввать
          строчные и заглавные буквы, должны присутствовать цифры.
        </p>
      </form-group>
    </div>
    <button
type="submit" class="button signup1__button">
      ДАЛЕЕ
    </button>
  </form>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "SignUp2",
  data() {
    return {
      blocks: [
        {
          title: "Логин *",
          model: "login",
          error: "Обязательное поле, минимум 4 символа."
        },
        {
          title: "Пароль *",
          model: "password",
          error: "Пароль не соответствует правилам."
        },
        {
          title: "Подтверждение пароля *",
          model: "passwordRepeat",
          error: "Пароли должны совпадать."
        }
      ],
      login: "",
      password: "",
      passwordRepeat: ""
    };
  },
  validations: {
    login: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      goodPassword: password => {
        return (
          password.length >= 8 &&
          /[a-z]/.test(password) &&
          /[A-Z]/.test(password) &&
          /[0-9]/.test(password)
        );
      }
    },
    passwordRepeat: {
      required,
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$emit("next", "SignUp2");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.signup1 {
  &__button {
    padding: 15px 45px;
    margin-bottom: 50px;
    background: #ffffff;
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
}

.input-block {
  &__title {
    color: #8d8d8d;
    text-align: left;
    font-size: 16px;
    font-size: responsive 13px 16px;
    margin: 0 auto;
    width: 300px;
  }

  &__input {
    margin: 0 auto 50px;
    width: 300px;
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid #8d8d8d;
    padding: 10px 0;

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

  &__description {
    width: 300px;
    margin: 0 auto;
    margin-bottom: 50px;
    color: #212529;
    text-align: left;
    font-size: 16px;
    font-size: responsive 13px 16px;
  }
}

.invalid-feedback {
  margin-top: -40px;
  margin-bottom: 18px;

  font-family: Roboto;
  font-size: calc(13px + 3 * ((100vw - 420px) / 860));
}
</style>
