<template>
	<div class="ui-kit">
		<details class="ui-kit__input ui-kit__details">
			<summary class="ui-kit__summary">Input</summary>
			<div class="ui-kit__content">
				<Input :v="$v.input" v-model="input" errorDescription="Обязательное поле >= 3 символа." />
			</div>
		</details>
		<details class="ui-kit__button ui-kit__details">
			<summary class="ui-kit__summary">Button</summary>
			<div class="ui-kit__content">
				<Button>Какая-то кнопка</Button>
			</div>
		</details>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
const { required, minLength } = require("vuelidate/lib/validators");

export default Vue.extend({
	name: "UiKit",

	components: {
		Input: () => import("@ui-components/Input.vue"),
		Button: () => import("@ui-components/Button.vue"),
	},

	data() {
		return {
			input: "",
		};
	},

	validations: {
		input: {
			type: String,
			minLength: minLength(3),
			required,
		},
	},
});
</script>

<style lang="scss" scoped>
.ui-kit {
	margin: 30px auto;
	padding: 0 30px;
	max-width: 1440px;

	&__details {
		font-size: 18px;
		margin-bottom: 20px;

		&:hover {
			cursor: pointer;
		}
	}

	&__content {
		margin: 10px;
	}
}
</style>
