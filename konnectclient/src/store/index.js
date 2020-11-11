import { createStore } from "vuex";

export default createStore({
  state: {
    token: null || localStorage.getItem("token"),
    user: null || localStorage.getItem("user"),
    isUserLoggedIn: false || localStorage.getItem("token")
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      if (token) {
        state.isUserLoggedIn = true;
      }
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    }
  },
  modules: {}
});
