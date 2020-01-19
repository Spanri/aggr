<template>
	<div class="signup-wrapper">
		<div class="signup">
			<nav class="signup__nav">
				<span
					v-for="item in 4"
					:key="item"
					class="signup__nav-item"
					:class="signupPhase == `Signup${item}` ? 'signup__nav-item_selected' : ''"
				>
					{{ item }}
				</span>
			</nav>
			<h1 class="signup__title">Регистрация</h1>
			<component :is="signupPhase" @next="next" />
		</div>
	</div>
</template>

<script>
export default {
	name: "AuthSignup",

	layout: "empty",

	components: {
		Signup1: () => import("@components/auth/signup/Signup1.vue"),
		Signup2: () => import("@components/auth/signup/Signup2.vue"),
		Signup3: () => import("@components/auth/signup/Signup3.vue"),
		Signup4: () => import("@components/auth/signup/Signup4.vue"),
		Signup5: () => import("@components/auth/signup/Signup5.vue"),
	},

	data() {
		return {
			signupPhase: "Signup1",
			data: {},
		};
	},

	methods: {
		next(component) {
			if (component.phase == "SignupFinish") {
				console.log("Завершено!");
				this.signupPhase = "Signup5";
			} else {
				if (component.isAdd) {
					this.data = { ...this.data, ...component.data };
				}
				console.log(this.data);
				this.signupPhase = component.phase;
			}
		},
	},
};
</script>

<style scoped lang="scss">
.signup {
	margin: 70px auto;
	height: auto;
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

	&__nav {
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		width: 300px;
		margin-top: 30px;

		&-item {
			border: 2px solid $color-accent;
			border-radius: 50%;
			width: 38px;
			height: 38px;
			color: $color-accent;
			background-color: $white;
			padding: 2px;
			font-family: Ubuntu;
			font-size: 22px;
			font-size: responsive 20px 24px;
			user-select: none;

			&_selected {
				background-color: $color-accent;
				border-color: $white;
				color: $white;
			}
		}
	}
}
</style>
