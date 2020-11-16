import Api from "@/services/Api";

export default {
  getProfile(data) {
    return Api().put("profile/",data);
  }
};
