import { createStore } from "vuex";

export default createStore({
  state: {
    token: null || localStorage.getItem("token"),
    user: null || localStorage.getItem("userid"),
    isAuthenticated: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("userid", user);
    },
    authenticate(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      localStorage.setItem("userid", null);
      localStorage.setItem("token", null);
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    authenticate({ commit }) {
      commit("authenticate");
    },
    logout({ commit }) {
      commit("logout");
    }
  },
  modules: {}
});
