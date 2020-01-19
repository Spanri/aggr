<template>
	<form class="signup1" @submit.prevent="submit">
		<div class="input-block-wrapper">
			<form v-for="(block, index) in blocks" :key="index" class="input-block">
				<p
					class="input-block__title"
					:class="block.model == 'passwordRepeat' ? 'input-block__title-password' : ''"
					v-html="block.title"
				/>
				<Input
					v-model="$v[block.model].$model"
					:v="$v[block.model]"
					class="input-block__input"
					placeholder="Введите пароль"
					:type="block.type ? block.type : 'text'"
					:errorDescription="block.errorDescription"
				/>
			</form>
		</div>
		<Button type="submit" :themeType="true" class="button signup1__button">ДАЛЕЕ</Button>
		<v-dialog />
	</form>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
	name: "Signup2",

	components: {
		Input: () => import("@ui-components/input/Input.vue"),
		Button: () => import("@ui-components/Button.vue"),
	},

	data() {
		return {
			blocks: [
				{
					title: "Номер телефона *",
					model: "username",
					placeholder: "Введите номер телефона",
					errorDescription: "Обязательное поле, минимум 4 символа.",
				},
				{
					title: "Пароль *",
					model: "password",
					placeholder: "Введите пароль",
					type: "password",
					errorDescription:
						"Обязательное поле, минимум 8 символов, должны быть заглавные и строчные латинские буквы, цифры.",
				},
				{
					title: "Подтверждение пароля *",
					model: "passwordRepeat",
					placeholder: "Подтвердите пароль",
					type: "password",
					errorDescription: "Пароли должны совпадать.",
				},
			],
			username: "",
			password: "",
			passwordRepeat: "",
		};
	},

	validations: {
		username: {
			required,
			minLength: minLength(4),
		},
		password: {
			required,
			goodPassword: password => {
				return (
					password.length >= 8 &&
					/[a-z]/.test(password) &&
					/[A-Z]/.test(password) &&
					/[0-9]/.test(password)
				);
			},
		},
		passwordRepeat: {
			required,
			sameAsPassword: sameAs("password"),
		},
	},

	methods: {
		submit() {
			this.$v.$touch();
			if (!this.$v.$invalid) {
				this.$emit("next", {
					phase: "Signup2",
					isAdd: true,
					data: { username: this.username, password: this.password },
				});
			} else {
				this.$modal.show("dialog", {
					title: "Ошибка",
					text: "Форма заполнена неверно 😓",
					buttons: [
						{
							title: "Закрыть",
							default: true,
						},
					],
				});
			}
		},
	},
};
</script>

<style scoped lang="scss">
@import "./signup.mixin.scss";
@include input-block();

.signup1 {
	&__button {
		margin-bottom: 50px !important;
		user-select: none;
	}
}

.input-block {
	&__input {
		margin-bottom: 40px;
		margin: 0 auto;
		margin-bottom: 40px;

		/deep/.ui-input {
			width: 300px;
		}

		/deep/.ui-input__error {
			width: 300px;
			margin: 0 auto;
		}
	}
}
</style>
