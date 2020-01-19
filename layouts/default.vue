<template>
	<div class="app">
		<Header class="app__header" />
		<div class="app__content-and-footer">
			<main class="app__content">
				<!-- <Loader class="app__loader" /> -->
				<nuxt class="app__main" />
			</main>
			<Footer class="app__footer" />
		</div>
	</div>
</template>

<script>
// import { TimelineMax } from "gsap";
//import { Sine, } from 'gsap/all';

export default {
	name: "DefaultLayout",

	components: {
		Header: () => import("@components/common/header/Header.vue"),
		Loader: () => import("@ui-components/Loader.vue"),
		Footer: () => import("@components/common/Footer.vue"),
	},

	// beforeMount() {
	// 	this.animate();
	// },

	// methods: {
	// 	animate() {
	// 		const timeLine = new TimelineMax();
	// 		timeLine.set(".app__loader", { visibility: "hidden", delay: 1 });
	// 		timeLine.from(".app__loader", 1, { alpha: 0, ease: 0 });
	// 		timeLine.to(".app__loader", 1, { alpha: 1, ease: 1 });
	// 		timeLine.to(".app__loader", 1.5, { alpha: 0, ease: 1 });
	// 	},
	// },
};
</script>

<style lang="scss" scoped>
.app {
	display: flex;
	flex-direction: column;
	// align-items: center;
	justify-content: space-between;

	min-height: 100vh;
	height: 100%;

	&__content-and-footer {
		display: flex;
		flex-direction: column;
		// align-items: center;
		justify-content: space-between;

		height: calc(100vh - 85.2px);
	}
}
</style>
