<template>
	<div class="footer-wrapper">
		<footer class="footer">
			<object class="footer__logo" data />
			<nav class="footer__nav">Подвал сайта</nav>
			<div class="footer__profile" />
		</footer>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "Footer",
});
</script>

<style lang="scss" scoped>
.footer {
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	max-width: 1440px;
	min-height: 70px;
	margin: 0 auto;

	&-wrapper {
		background: $gray-light;
	}
}
</style>
