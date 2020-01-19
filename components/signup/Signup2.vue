<template>
	<form class="signup2" @submit.prevent="onSubmit">
		<p class="input-block__title">Кто вы?</p>
		<!-- <b-form-select
			v-model="status"
			:options="[
				{ value: 'study11', text: 'Учусь в 11 классе' },
				{ value: 'study11-', text: 'Учусь в классе меньше 11' },
			]"
		/> -->
		<Dropdown v-show="true" flow="horizontal" v-model="dropdown" :items="dropdowns">
			asd {{ dropdown.text }}
		</Dropdown>
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
			dropdown: "",
			dropdowns: [{ text: "dfgdfg" }, { text: "d12fg" }],
		};
	},

	methods: {
		onSubmit() {
			this.$emit("next", "Signup3");
		},

		onPrev() {
			console.log("dfgdgf");
			this.$emit("next", "Signup1");
		},
	},
};
</script>

<style scoped lang="scss">
.signup2 {
	&__button {
		margin-bottom: 50px !important;

		& + & {
			margin-left: 15px;
		}
	}
}

.input-block {
	&__title {
		color: #8d8d8d;
		text-align: left;
		font-size: 16px;
		font-size: responsive 13px 16px;
		margin: 0 auto;
		width: 300px;
	}

	&__description {
		width: 300px;
		margin: 0 auto;
		margin-bottom: 50px;
		color: #212529;
		text-align: left;
		font-size: 16px;
		font-size: responsive 13px 16px;
	}
}
</style>
