<template>
	<div class="ui-input-wrapper">
		<div class="ui-input ui-input__flow" ref="input">
			<InputWithoutValidation
				class="ui-input__input"
				type="text"
				title="Введите значение для поиска"
				placeholder="Поиск по значениям"
				v-model="filterValue"
				size="small"
			/>
			<div v-if="filteredItems.length" class="ui-input__items">
				<p
					class="ui-input__item"
					:class="{
						active: value.id === item.id,
						disable: item.disable && item.disable == true,
					}"
					v-for="(item, index) in filteredItems"
					:key="index"
					@click="onClickItem(item)"
				>
					{{ item.text }}
				</p>
			</div>
			<p v-else class="ui-input__not-found">Ничего не найдено</p>
		</div>
	</div>
</template>

<script>
import { IDGenerator } from "@helpers/generator.helper";

export default {
	name: "UiInputWithSearch",

	model: {
		prop: "value",
		event: "change",
	},

	props: {
		/**
		 * Значение, вводимое в инпут
		 */
		value: {
			type: String,
			require: true,
		},

		/**
		 * Из чего выбирать
		 * id (not required), text (required)
		 */
		items: {
			type: Array,
			default: () => [],
		},

		type: String,
		placeholder: String,
	},

	components: {
		InputWithoutValidation: () => import("@ui-components/input/InputWithoutValidation"),
	},

	data() {
		return {
			isFocus: false,
			filterValue: "",
		};
	},

	computed: {
		filteredItems() {
			const { items, filterValue } = this;
			if (!filterValue) {
				return items;
			}

			const pattern = new RegExp(filterValue, "i");
			const filteredItems = [];

			items.forEach(item => {
				if (pattern.test(item.text)) {
					filteredItems.push(item);
				}
			});

			return filteredItems;
		},

		// inputValue: {
		// 	get() {
		// 		return this.value;
		// 	},
		// 	set(value) {
		// 		this.$emit("input", value);
		// 	},
		// },
	},

	mounted() {
		/**
		 * Если у value нет id, добавляем его
		 */
		this.items.forEach((item, index) => {
			if (!("id" in item)) {
				this.items[index].id = IDGenerator();
			}
		});
	},

	methods: {
		/**
		 * Выбрать элемент
		 */
		onClickItem(item) {
			this.$emit("change", item);
		},
	},
};
</script>

<style lang="scss" scoped>
.ui-input {
	margin: 0 auto;
	// width: 300px;
	border: 0;
	border-radius: 0;
	border-bottom: 2px solid $gray-lightest;
	padding: 10px 0;
	border-radius: 5px;
	border: 2px solid $gray-lightest;
	width: min-content;

	&__items {
		// border-radius: 5px;
		// border: 2px solid $gray-lightest;
	}

	&__input {
		width: 100%;
		padding: 0 10px;
	}

	&__item {
		width: 100%;
		height: 100%;
		text-align: center;
		margin: 0;
		padding: 10px 0;

		&.active {
			background: $color-accent;
			color: $white;

			&:hover {
				color: $white;
			}
		}

		&.disable {
			color: $gray;
			pointer-events: none;
		}

		&:hover {
			cursor: pointer;
			color: $color-accent;
		}
	}
}
</style>
