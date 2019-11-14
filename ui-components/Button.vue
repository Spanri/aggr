<template>
  <button
    class="button"
    :class="type ? 'button__type_1' : 'button__type_0'"
  >
    <slot class="button__slot" />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    // false - backg accent, true - backg light
    type: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  all: unset;
  background: none;
  border: 0;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid $color-accent;

  &__type {

    &_0 {
      background: $color-accent;
      color: $color-gray-light;

      &:hover {
        cursor: pointer;
        background: $color-gray-light;
        color: $color-accent;
      }

    }

    &_1 {
      background: $color-gray-light;
      color: $color-accent;
    }

  }

}
</style>
