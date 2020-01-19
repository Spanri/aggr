<template>
	<button class="ui-button" :class="[themeClass, sizeClass]">
		<slot class="ui-button__slot" />
	</button>
</template>

<script>
export default {
	name: "UiButton",
	props: {
		// false - backg accent, true - backg light
		themeType: {
			type: Boolean,
			default: false,
		},

		/**
		 * Размер кнопки
		 * small/normal/large
		 */
		size: {
			type: String,
			default: "normal",
		},
	},

	computed: {
		themeClass() {
			const themes = {
				true: "ui-button__type ui-button__type_1",
				false: "ui-button__type ui-button__type_0",
			};

			return themes[this.themeType];
		},
		sizeClass() {
			const sizes = {
				small: "ui-button__size ui-button__size_small",
				normal: "ui-button__size ui-button__size_normal",
				large: "ui-button__size ui-button__size_large",
			};

			return sizes[this.size];
		},
	},
};
</script>

<style lang="scss" scoped>
.ui-button {
	all: unset;
	background: none;
	border: 2px solid $color-accent;

	&__type {
		&_0 {
			background: $color-accent;
			color: $white;

			&:hover {
				transition: 0.3s;
				cursor: pointer;
				background: $white;
				color: $color-accent;
			}
		}

		&_1 {
			background: $white;
			color: $color-accent;

			&:hover {
				transition: 0.3s;
				cursor: pointer;
				background: $color-accent;
				color: $white;
			}
		}
	}

	&__size {
		&_small {
			font-size: 14px;
			padding: 8px;
			padding-right: 10px;
			border-radius: 20px;
		}

		&_normal {
			font-size: 18px;
			padding: 10px;
			border-radius: 20px;
		}

		&_large {
			font-size: 20px;
			padding: 12px;
			border-radius: 24px;
		}
	}
}
</style>
