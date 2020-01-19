<template>
	<div class="loader">
		<i class="icon-spinner" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "Loader",
});
</script>

<style lang="scss" scoped>
.loader {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	//visibility: hidden;
}
</style>
