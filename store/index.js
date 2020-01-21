export default {
	state: {
		token: null,
		user: null,
	},

	getters: {
		isAuthenticated: state => !!state.token,
		user: state => state.user,
	},

	mutations: {
		setToken: (state, token) => {
			state.token = token;
		},

		setUser: (state, user) => {
			state.user = user;
		},
	},

	actions: {
		async login({ commit }, { email, password }) {
			try {
				const res = await this.$axios.$post("login", { email, password });
				if (process.browser) {
					localStorage.setItem("token", res.token);
				}
				commit("setToken", res.token);
				commit("setUser", {
					profile: {
						name: "Anna",
					},
				});
			} catch (error) {
				if (process.browser) {
					localStorage.removeItem("token");
				}
				throw error;
			}
		},

		logout({ commit }) {
			localStorage.removeItem("token");
			commit("setToken", null);
			commit("setUser", null);
		},
	},
};
