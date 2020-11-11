import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  },
  authenticate(data,headers) {
    return Api().post("authenticate",data, headers);
  }
};
