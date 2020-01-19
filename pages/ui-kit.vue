<template>
	<div class="ui-kit">
		<details class="ui-kit__input ui-kit__details">
			<summary class="ui-kit__summary">Input с валидацией и без неё</summary>
			<div class="ui-kit__content">
				С валидацией:
				<Input :v="$v.input" v-model="input" errorDescription="Обязательное поле >= 3 символа." />
			</div>
			<div class="ui-kit__content">
				Без валидации:
				<InputWithoutValidation v-model="input" />
			</div>
		</details>
		<details class="ui-kit__button ui-kit__details">
			<summary class="ui-kit__summary">Button</summary>
			<div class="ui-kit__content">
				<Button>Какая-то кнопка</Button>
				<Button size="large">Какая-то большая кнопка</Button>
				<Button size="small">Какая-то маленькая кнопка</Button>
				<Button :themeType="true">Какая-то другая кнопка</Button>
			</div>
		</details>
		<details class="ui-kit__dropdown ui-kit__details">
			<summary class="ui-kit__summary">Dropdown без поиска и с ним</summary>
			<div class="ui-kit__content">
				Выбранное значение: {{ dropdown }}
				<br />
				<Dropdown
					class="ui-kit__dropdown-item"
					v-show="true"
					flow="horizontal"
					v-model="dropdown"
					:items="dropdowns"
					autoClose
				>
					Дропдаун без поиска горизонтальный и сам закрывается после выбора (кликни)
				</Dropdown>
				<DropdownWithSearch
					class="ui-kit__dropdown-item"
					v-show="true"
					flow="horizontal"
					v-model="dropdown"
					:items="dropdowns"
				>
					Дропдаун с поиском вертикальный (кликни)
				</DropdownWithSearch>
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
		Input: () => import("@ui-components/input/Input.vue"),
		InputWithoutValidation: () => import("@ui-components/input/InputWithoutValidation.vue"),
		Button: () => import("@ui-components/Button.vue"),
		Dropdown: () => import("@ui-components/dropdown/Dropdown.vue"),
		DropdownWithSearch: () => import("@ui-components/dropdown/DropdownWithSearch.vue"),
	},

	data() {
		return {
			input: "",
			dropdown: {},
			dropdowns: [
				{ text: "one cat and four dogs" },
				{ text: "two roses" },
				{ text: "million one" },
			],
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

		& > * {
			margin-right: 5px;
			margin-bottom: 5px;
		}
	}

	&__dropdown {
		&-item {
			min-width: 200px;
			margin-top: 30px;
			width: min-content;

			/deep/.ui-dropdown__content {
			}
		}
	}
}
</style>
