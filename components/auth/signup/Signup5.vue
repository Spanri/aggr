<template>
	<div class="signup5" @submit.prevent="onSubmit">
		<p class="signup5__title">Вы успешно зарегистрировались! 😄</p>
		<Button :themeType="false" class="signup5__button">
			<nuxt-link to="/auth/login">НА СТРАНИЦУ ВХОДА</nuxt-link>
		</Button>
	</div>
</template>

<script>
export default {
	name: "Signup4",

	components: {
		Button: () => import("@ui-components/Button.vue"),
	},
};
</script>

<style scoped lang="scss">
a {
	text-decoration: none;
	all: unset;
}

.signup5 {
	&__button {
		margin: 50px 0 !important;
		user-select: none;
	}
}
</style>
