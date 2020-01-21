<template>
	<div class="header-wrapper">
		<header class="header">
			<nuxt-link class="header__logo-link" to="/">
				<Logo class="header__logo" />
			</nuxt-link>
			<HeaderNav class="header__nav" :items="items" />
			<nuxt-link
				v-if="!isAuthenticated"
				to="/auth/login"
				class="header__profile header__profile_false"
			>
				<span class="header__profile-text">Войти</span>
				<span class="header__profile-logo icon-person" />
			</nuxt-link>

			<div v-else class="header__profile header__profile_true">
				<span class="header__profile-text">{{ user.profile.name }}</span>
				<LogoProfile class="header__profile-logo" />
				<span @click="onLogout()">выйти</span>
			</div>
		</header>
	</div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import Vue from "vue";

export default Vue.extend({
	name: "Header",

	components: {
		Logo: () => import("@assets/svg/logo.svg"),
		HeaderNav: () => import("./HeaderNav.vue"),
		LogoProfile: () => import("@assets/svg/logoProfile.svg"),
	},

	data() {
		return {
			items: [
				{ title: "ГЛАВНАЯ", href: "/" },
				{ title: "UI KIT", href: "/tools/ui-kit" },
				{ title: "ПУНКТ 3", href: "/" },
				{ title: "ПУНКТ 4", href: "/" },
				{ title: "ПУНКТ 5", href: "/" },
			],
		};
	},

	computed: {
		...mapGetters(["isAuthenticated", "user"]),
	},

	methods: {
		...mapActions(["logout"]),

		onLogout() {
			this.logout();
		},
	},
});
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	max-width: 1440px;
	margin: 0 auto;

	&-wrapper {
		background: $gray-light;
	}

	&__logo {
		height: 42px;
		margin: 20px;
	}

	&__nav {
		align-items: center;
		user-select: none;
	}

	&__profile {
		display: flex;
		align-items: center;
		color: $gray-lightest;
		text-decoration: none;
		user-select: none;

		&:hover {
			cursor: pointer;
			color: $gray;
			transition: 0.3s;

			& .header__profile-logo {
				transition: 0.4s;
				color: $color-accent;
			}
		}

		&-logo {
			font-size: 30px;
			color: $gray-lightest;
			margin: 20px 20px 20px 10px;
		}
	}
}
</style>
