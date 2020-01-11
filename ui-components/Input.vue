<template>
  <div class="ui-input-wrapper">
    <input v-model="value" class="ui-input" :type="type" />
    <!-- <b-form-input
        v-model="$v.password.$model"
        class="input login__input"
        type="password"
        placeholder="Введите пароль"
        :state="$v.password.$dirty ? !$v.password.$error : null"
        :aria-describedby="`login__invalid-feedback-password`"
    />-->
    <b-form-invalid-feedback :id="`login__invalid-feedback-password`">Обязательное поле.</b-form-invalid-feedback>
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
    value: [String, Number],

    /**
     * Тип инпута - текст, пароль, email и т.д.
     */
    type: String
  }
});
</script>
