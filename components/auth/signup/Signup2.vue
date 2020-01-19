<template>
	<form class="signup2" @submit.prevent="onSubmit">
		<p class="input-block__title">Кто вы?</p>
		<Dropdown flow="vertical" v-model="status" :items="statuses">asd {{ status.text }}</Dropdown>
		<Button
			type="button"
			@click="onPrev()"
			:themeType="true"
			size="large"
			class="signup2__button signup2__button_prev"
		>
			НАЗАД
		</Button>
		<Button
			type="submit"
			:themeType="true"
			size="large"
			class="signup2__button signup2__button_next"
		>
			ДАЛЕЕ
		</Button>
		<v-dialog />
	</form>
</template>

<script>
export default {
	name: "Signup2",

	components: {
		Dropdown: () => import("@ui-components/dropdown/Dropdown.vue"),
		Button: () => import("@ui-components/Button.vue"),
	},

	data() {
		return {
			status: "",
			statuses: [{ text: "Учусь в 11 классе" }, { text: "Учусь в классе меньше 11" }],
		};
	},

	methods: {
		onSubmit() {
			this.$emit("next", {
				phase: "Signup3",
				isAdd: true,
				data: { status: this.status.text },
			});
		},

		onPrev() {
			this.$emit("next", {
				phase: "Signup1",
				isAdd: false,
				data: {},
			});
		},
	},
};
</script>

<style scoped lang="scss">
.signup2 {
	&__button {
		margin-bottom: 50px !important;
		user-select: none;

		& + & {
			margin-left: 15px;
		}
	}
}
</style>
