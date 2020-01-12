<template>
  <div class="ui-input-wrapper">
    <input
      v-model="inputValue"
      class="ui-input"
      :class="{ 'ui-input__error': v.$invalid }"
      :type="type ? type : ''"
      :placeholder="placeholder ? placeholder : ''"
    />
    <!-- <b-form-input
        v-model="$v.password.$model"
        class="input login__input"
        type="password"
        placeholder="Введите пароль"
        :state="$v.password.$dirty ? !$v.password.$error : null"
        :aria-describedby="`login__invalid-feedback-password`"
    />-->
    <div class="ui-input__error" v-show="v.$invalid">
      {{ errorDescription }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiInput",

  props: {
    /**
     * Значение, вводимое в инпут
     */
    value: {
      type: [String, Number],
      require: true
    },

    /**
     * Объект с валидацией значения из value
     */
    v: {
      type: Object,
      require: true
    },

    /**
     * Описание ошибки
     */
    errorDescription: {
      type: String,
      default: ""
    },

    type: String,
    placeholder: String
  },

  computed: {
    inputValue: {
      get() {
        const self = this;
        return self.value;
      },
      set(value: any) {
        const self = this;
        (this as any)["v" as any].$touch();
        (self as any).$emit("input", value);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.ui-input {
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
</style>
