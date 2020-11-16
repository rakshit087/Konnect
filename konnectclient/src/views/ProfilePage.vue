<template :key="name">
  <div class="w-screen h-screen flex">
    <Sidebar />
    <Profile :profileId="this.ProfileId" />
    <WidgetBox />
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import Sidebar from "@/components/Sidebar";
import WidgetBox from "@/components/WidgetBox";
export default {
  name: "Dashboard",
  components: {
    Sidebar,
    WidgetBox,
    Profile
  },
  props: {
    name: {
      type: String,
      default: "Home",
      required: true
    },
    profileId: {
      type: String,
      default: localStorage.getItem("userid"),
      required: false
    }
  }
};
</script>
