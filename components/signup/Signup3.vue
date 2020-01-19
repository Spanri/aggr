<template>
	<div>
		<form class="signup3" @submit.prevent="onSubmit">
			<p class="input-block__title">Укажите предметы и баллы, которые вы за них получили</p>
			<Dropdown v-show="true" flow="horizontal" v-model="status" :items="statuses">
				asd {{ status.text }}
			</Dropdown>
			<Dropdown />
			<Button
				@click="onPrev()"
				:themeType="true"
				class="button signup3__button signup3__button_prev"
			>
				НАЗАД
			</Button>
			<Button
				@click="onSkip()"
				:themeType="true"
				class="button signup3__button signup3__button_prev"
			>
				ПРОПУСТИТЬ
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

		onSkip() {
			this.$emit("next", {
				phase: "Signup4",
				isAdd: true,
				data: {},
			});
		},

		onPrev() {
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
