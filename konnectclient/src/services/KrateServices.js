import Api from "@/services/Api";
import TokenVerification from "@/services/TokenVerification";

export default {
  async post(krate) {
    const tVerRes = await TokenVerification.verify();
    console.log(tVerRes);
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
  }
};
