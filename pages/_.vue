<template>
	<div class="not-found-wrapper">
		<div class="not-found">
			<h1 class="not-found__title">Страница не найдена 😭</h1>
			<Button class="not-found__button" size="large" :themeType="false">
				<nuxt-link to="/">НА ГЛАВНУЮ</nuxt-link>
			</Button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "NotFound",

	layout: "empty",

	components: {
		Button: () => import("@ui-components/Button.vue"),
	},
});
</script>

<style lang="scss" scoped>
a {
	text-decoration: none;
	all: unset;
}

.not-found {
	max-width: 400px;
	text-align: center;

	&-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 100%;
		min-height: 100vh;
	}

	&__button {
		margin-top: 30px !important;
	}
}
</style>
