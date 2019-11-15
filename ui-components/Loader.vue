<template>
  <div class="loader">
    <a href="" class="loader__link">
      <img src="@/assets/images/loader.png" alt="">
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  
});
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  visibility: hidden;
}
</style>