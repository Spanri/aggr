import {
  AUTH_REQUEST,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
  AUTH_ERROR
} from "./mutations-type";

export const state = () => ({
  token: "",
  status: ""
});

export const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

export const actions = {
  // nuxtServerInit({ commit, }, { req, }) {
  //   if (req.session.user) {
  //     commit('user', req.session.user);
  //   }
  // },
  [AUTH_REQUEST]({ commit /*dispatch,*/ }, user) {
    return new Promise((resolve, reject) => {
      // The Promise used for router redirect in login
      commit(AUTH_REQUEST);
      // axios.post('http://18.222.253.172/login', {
      //   // Send the client cookies to the server
      //   credentials: 'same-origin',
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(user),
      // })
      this.$axios
        .$post("http://18.222.253.172/login", user)
        .then(resp => {
          console.log(resp);
          const token = resp;
          if (process.browser) {
            localStorage.setItem("user-token", token);
          }
          commit(AUTH_SUCCESS, token);
          // you have your token, now log in your user :)
          // dispatch(USER_REQUEST);
          resolve(resp);
        })
        .catch(err => {
          commit(this.AUTH_ERROR, err);
          if (process.browser) {
            localStorage.removeItem("user-token");
          }
          reject(err);
        });
    });
  },
  [AUTH_LOGOUT]: ({ commit /*dispatch*/ }) => {
    return new Promise((resolve /*reject*/) => {
      commit(this.AUTH_LOGOUT);
      if (process.browser) {
        localStorage.removeItem("user-token");
      }
      resolve();
    });
  }
};

export const mutations = {
  [AUTH_REQUEST]: state => {
    state.status = "loading";
  },
  [AUTH_SUCCESS]: (state, token) => {
    state.status = "success";
    state.token = token;
  },
  [AUTH_ERROR]: state => {
    state.status = "error";
  }
};
