import Api from "@/services/Api";
import TokenVerification from "@/services/TokenVerification";

export default {
  async post(krate) {
    const tVerRes = await TokenVerification.verify();
    if (tVerRes.data.error) {
      return tVerRes.data.error;
    } else {
      return Api().post("krate", {
        userId: tVerRes.data.id,
        krate: krate
      });
    }
  },
  async get() {
    return await Api().get("krate");
  },
  async upvote(data) {
    return await Api().patch("krate/up",data);
  },
  async downvote(data) {
    return await Api().patch("krate/down",data);
  },
  async postComment(data) {
    return await Api().post("krate/comment",data);
  },
  async getComments(data){
    return await Api().put("krate/comment",data)
  }
};
