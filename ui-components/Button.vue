<template>
	<button class="ui-button" :class="themeType ? 'ui-button__type_1' : 'ui-button__type_0'">
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
	},
};
</script>

<style lang="scss" scoped>
.ui-button {
	all: unset;
	background: none;
	border: 0;
	padding: 10px;
	border-radius: 20px;
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
}
</style>
