<template>
	<div class="ui-dropdown-wrapper" v-click-outside="onHideDropdown">
		<div class="ui-dropdown__content" ref="slot" @click="onShowDropdown">
			<slot :visible="isDropdownShow" />
		</div>
		<transition name="slide-fade">
			<div
				ref="dropdown"
				class="ui-dropdown ui-dropdown__flow"
				v-show="isDropdownShow"
				:style="styleObject"
			>
				<p
					v-for="(item, index) in items"
					:key="index"
					class="ui-dropdown__item"
					:class="{
						active: value.id === item.id,
						disable: item.disable && item.disable == true,
					}"
					@click="onClickItem(item)"
				>
					{{ item.text }}
				</p>
			</div>
		</transition>
	</div>
</template>

<script>
import dropdownMixin from "./dropdown.mixin";

export default {
	name: "UiDropdown",

	/**
	 * !!! Внимание другие свойства тут
	 */
	mixins: [dropdownMixin],

	methods: {
		/**
		 * Показать выпадающий список ролей
		 */
		onShowDropdown() {
			this.isDropdownShow = !this.isDropdownShow;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "./dropdown.mixin.scss";

@include dropdown();
</style>
