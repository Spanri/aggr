<template>
	<div>
		<form class="signup3" @submit.prevent="onSubmit">
			<p class="input-block__title">Кто вы 2?</p>
			<!-- <b-form-select
			v-model="status"
			:options="[
				{ value: 'study11', text: 'Учусь в 11 классе' },
				{ value: 'study11-', text: 'Учусь в классе меньше 11' },
			]"
		/> -->
			<Dropdown />
			<Button
				@click="onPrev()"
				:themeType="true"
				class="button signup3__button signup3__button_prev"
			>
				НАЗАД
			</Button>
			<Button type="submit" :themeType="true" class="button signup3__button signup3__button_next">
				ДАЛЕЕ
			</Button>
			<v-dialog />
		</form>
		<!-- <Button @click="onPrev" :themeType="true" class="button signup3__button signup3__button_prev">
			НАЗАД
		</Button> -->
	</div>
</template>

<script>
export default {
	name: "Signup3",

	components: {
		Dropdown: () => import("@ui-components/Dropdown.vue"),
		Button: () => import("@ui-components/Button.vue"),
	},

	data() {
		return {
			status: "",
		};
	},

	methods: {
		onSubmit() {
			this.$emit("next", "Signup4");
		},

		onPrev() {
			this.$emit("next", "Signup2");
		},
	},
};
</script>

<style scoped lang="scss">
.signup3 {
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
