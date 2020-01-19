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
			this.$emit("next", {
				phase: "Signup4",
				isAdd: true,
				data: {},
			});
		},

		onPrev() {
			this.$emit("next", "Signup2");
			this.$emit("next", {
				phase: "Signup2",
				isAdd: false,
				data: {},
			});
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
</style>
