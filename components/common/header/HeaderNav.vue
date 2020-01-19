<template>
	<nav class="nav">
		<nuxt-link v-for="(item, index) in items" :key="index" class="nav__item" :to="item.href">
			{{ item.title }}
		</nuxt-link>
	</nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "HeaderNav",

	props: {
		items: Array,
	},
});
</script>

<style lang="scss" scoped>
.nuxt-link-active {
	cursor: pointer;
	background: $color-accent;
	color: $white;
}

.nav {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;

	&__item {
		all: unset;
		border: 0;
		padding: 10px;
		border-radius: 20px;
		border: 2px solid transparent;
		color: $gray-lightest;

		&:hover {
			transition: 0.3s;
			cursor: pointer;
			background: $color-accent;
			color: $white;
		}
	}
}
</style>
