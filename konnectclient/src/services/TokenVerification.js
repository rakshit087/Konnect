import store from "@/store";
store.getters.config;
import AuthenticationService from "@/services/AuthenticationService";

export default {
  async verify() {
    if (localStorage.getItem("token") != null) {
      const response = await AuthenticationService.authenticate(
        {},
        {
          headers: {
            authtoken: localStorage.getItem("token")
          }
        }
      );
      if (response.data.error) {
        store.dispatch("logout");
        return response;
      } else {
        console.log("Authenticated");
        store.dispatch("authenticate");
        return response;
      }
    } else {
      return null;
    }
  }
};
