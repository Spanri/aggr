<template>
	<div class="ui-dropdown-wrapper" v-click-outside="onHideDropdown">
		<div class="ui-dropdown__content" ref="slot" @click="onShowDropdown">
			<slot />
		</div>
		<transition name="slide-fade">
			<div class="ui-dropdown ui-dropdown__flow" ref="dropdown" v-show="isDropdownShow">
				<InputWithoutValidation
					class="ui-dropdown__input"
					type="text"
					title="Введите значение для поиска"
					placeholder="Поиск"
					v-model="filterValue"
					size="small"
				/>
				<div v-if="filteredItems.length" class="ui-dropdown__items" :style="styleObject">
					<p
						class="ui-dropdown__item"
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
				<p v-else class="ui-dropdown__not-found">Ничего не найдено</p>
			</div>
		</transition>
	</div>
</template>

<script>
import dropdownMixin from "./dropdown.mixin";

export default {
	name: "UiDropdownWithSearch",

	/**
	 * !!! Внимание другие свойства тут
	 */
	mixins: [dropdownMixin],

	components: {
		InputWithoutValidation: () => import("@ui-components/input/InputWithoutValidation.vue"),
	},

	data() {
		return {
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
	},

	methods: {
		/**
		 * Показать выпадающий список ролей
		 */
		onShowDropdown() {
			this.filterValue = "";
			this.isDropdownShow = !this.isDropdownShow;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./dropdown.mixin.scss";

@include dropdown();

.ui-dropdown {
	&__input {
		margin: 5px;

		& /deep/.ui-input-inner {
			border-radius: 5px;
			padding-right: 30px;
		}

		&:before {
			content: "\e915";
			pointer-events: none;
			width: 15px;
			height: 15px;

			position: absolute;
			top: 10px;
			right: 10px;
		}
	}

	&__items {
		// width: 100%;
		max-height: 200px;
		overflow-y: auto;
	}
}
</style>
