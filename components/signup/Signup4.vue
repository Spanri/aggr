<template>
	<form class="signup4" @submit.prevent="onSubmit">
		<p class="input-block__title">Кто вы 3?</p>
		<Button @click="onPrev()" :themeType="true" class="button signup4__button signup3__button_prev">
			НАЗАД
		</Button>
		<Button type="submit" :themeType="true" class="button signup4__button signup3__button_next">
			ЗАРЕГИСТРИРОВАТЬСЯ
		</Button>
		<v-dialog />
	</form>
</template>

<script>
export default {
	name: "Signup4",

	components: {
		Dropdown: () => import("@ui-components/dropdown/Dropdown.vue"),
		Button: () => import("@ui-components/Button.vue"),
	},

	data() {
		return {
			status: "",
		};
	},

	methods: {
		onSubmit() {
			this.$modal.show("dialog", {
				title: "Регистрация",
				text: "Форма заполнена верно, но функционал еще не реализован.",
				buttons: [
					{
						title: "Закрыть",
					},
				],
			});
		},

		onPrev() {
			this.$emit("next", {
				phase: "Signup3",
				data: {},
			});
		},
	},
};
</script>

<style scoped lang="scss">
@import "./signup.mixin.scss";
@include input-block();

.signup4 {
	&__button {
		margin-bottom: 50px !important;
	}
}

.invalid-feedback {
	margin-top: -40px;
	margin-bottom: 18px;

	font-family: Roboto;
	font-size: calc(13px + 3 * ((100vw - 420px) / 860));
}
</style>
