import axios from "axios";

// Adds header: `Authorization: 123` to all requests
this.$axios.setToken("123");
// Set baseURL (both client and server)
this.$axios.setBaseURL("http://api.example.com");

export default {
	/**
	 * Залогинить пользователя
	 * @param {String} email
	 * @param {String} password
	 */
	async login(email, password) {
		try {
			// Логинить пользователя на сервере
			const user = await axios.post("login", { email, password });

			// Логинить пользователя на клиенте
			// accessManager.setUser(user);

			return user;
		} catch (errors) {
			throw errors;
		}
	},
};
