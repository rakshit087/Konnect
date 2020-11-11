import { createStore } from "vuex";

export default createStore({
  state: {
    token: null || localStorage.getItem("token"),
    user: null || localStorage.getItem("userid"),
    Authenticated: false
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token",token);
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("userid",user);
    },
    authenticate(state){
      state.Authenticated = true;
      // console.log(state.Authenticated);
      // sessionStorage.setItem("authentication",true);
    },
    logout(state){
      state.Authenticated = false;
      state.token = null;
      state.user = null;
      localStorage.setItem("userid",null);
      localStorage.setItem("token",null);
      sessionStorage.setItem("authentication",null);
      console.log("Logged Out");
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
    authenticate({commit}){
      commit("authenticate");
    },
    logout({commit}){
      commit("logout");
    }
  },
  modules: {}
});
