<template>
	<div class="login-wrapper">
		<form class="login" @submit.prevent="onSubmit">
			<h1 class="login__title">Вход</h1>
			<p class="login__input-title">Номер телефона *</p>
			<Input
				v-model="username"
				:v="$v.username"
				class="login__input login__input_username"
				placeholder="Введите номер телефона"
				errorDescription="Обязательное поле, только цифры."
			/>
			<p class="login__input-title">Пароль *</p>
			<Input
				v-model="password"
				:v="$v.password"
				class="login__input login__input_password"
				placeholder="Введите пароль"
				type="password"
				errorDescription="Обязательное поле."
			/>
			<Button class="login__button" :themeType="true" type="submit">Войти</Button>
			<br />
			<p class="login__link-wrapper login__remember-password">
				<nuxt-link class="login__link login__link_password" to>
					Забыли пароль? (ничего нет)
				</nuxt-link>
			</p>
			<p class="login__link-wrapper login__signup">
				Нет аккаунта?
				<nuxt-link class="login__link login__link_signup" to="signup">Зарегистрироваться</nuxt-link>
			</p>
		</form>
		<v-dialog />
	</div>
</template>

<script>
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
	name: "AuthLogin",

	layout: "empty",
	middleware: "authFalse",

	components: {
		Input: () => import("@ui-components/input/Input.vue"),
		Button: () => import("@ui-components/Button.vue"),
	},

	data() {
		return {
			username: "",
			password: "",
		};
	},

	validations: {
		username: {
			required,
			type: Number,
		},
		password: {
			required,
		},
	},

	methods: {
		...mapActions(["login"]),

		async onSubmit() {
			this.$v.$touch();
			if (!this.$v.$invalid) {
				try {
					await this.login({ email: "eve.holt@reqres.in", password: "cityslicka" });
				} catch (error) {
					console.log(error);
				}
				this.$router.push("/");
			} else {
				this.$modal.show("dialog", {
					title: "Ошибка",
					text: "Форма заполнена неверно",
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
.login {
	// height: 537px;
	width: 450px;
	box-shadow: 0 0 20px rgba($black, 0.25);
	border-radius: 20px;

	&-wrapper {
		margin: 0 auto;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	&__title {
		padding: 20px;
		padding-top: 30px;
		padding-bottom: 50px;
		font-size: 30px;
		font-size: responsive 28px 36px;
	}

	&__input {
		margin: 0 auto;
		margin-bottom: 40px;

		/deep/.ui-input {
			width: 300px;
		}

		/deep/.ui-input__error {
			width: 300px;
			margin: 0 auto;
		}

		&-title {
			color: $gray-lightest;
			text-align: left;
			font-size: 16px;
			font-size: responsive 13px 16px;
			margin: 0 auto;
			width: 300px;
		}
	}

	&__button {
		@include button();

		padding: 15px 45px;
		background: $white;
		border: 2px solid $color-accent;
		box-sizing: border-box;
		border-radius: 25px;
		font-family: Ubuntu;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 21px;
		text-align: center;
		color: $color-accent;
	}

	&__remember-password {
		margin-top: 30px;
	}

	&__signup {
		margin-top: 10px;
		margin-bottom: 40px;
	}

	&__link {
		color: $color-accent;
	}
}
</style>
