<template>
  <div class="container">
    Ошибка!
    <h1 v-if="error.statusCode === 404">
      Страница не найдена
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <nuxt-link to="/">
      На главную
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "ErrorLayout",
  props: ["error"],
  layout: "default"
};
</script>
