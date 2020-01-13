<template>
	<form class="signup2" @submit.prevent="submit">
		<p class="input-block__title">Кто вы?</p>
		<b-form-select
			v-model="status"
			:options="[
				{ value: 'study11', text: 'Учусь в 11 классе' },
				{ value: 'study11-', text: 'Учусь в классе меньше 11' }
			]"
		/>
		<button type="submit" class="button signup1__button">ДАЛЕЕ</button>
	</form>
</template>

<script>
export default {
	name: "SignUp2",
	data() {
		return {
			status: ""
		}
	},
	methods: {
		submit() {
			this.$v.$touch()
			if (!this.$v.$invalid) {
				this.$emit("next", "SignUp3")
			}
		}
	}
}
</script>

<style scoped lang="scss">
.signup1 {
	&__button {
		padding: 15px 45px;
		margin-bottom: 50px;
		background: #ffffff;
		border: 2px solid #31b0ce;
		box-sizing: border-box;
		border-radius: 25px;
		font-family: Ubuntu;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 21px;
		text-align: center;
		color: #10b2d6;
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

	&__input {
		margin: 0 auto 50px;
		width: 300px;
		border: 0;
		border-radius: 0;
		border-bottom: 2px solid #8d8d8d;
		padding: 10px 0;

		&:focus {
			border: 0;
			box-shadow: 0;
		}

		&::placeholder {
			color: #464646;
		}

		&:-webkit-autofill {
			-webkit-text-fill-color: rgb(52, 42, 199) !important;
		}
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

.invalid-feedback {
	margin-top: -40px;
	margin-bottom: 18px;

	font-family: Roboto;
	font-size: calc(13px + 3 * ((100vw - 420px) / 860));
}
</style>
