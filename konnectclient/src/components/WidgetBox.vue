<template>
  <div class="w-1/5 bg-offWhite flex flex-col items-center justify-between">
    <div class="w-full flex flex-col items-center">
      <div class="mt-12 w-1/2 flex flex-col items-center">
        <ProfilePicture />
        <h1 class="text-darkBlue font-bold text-xl mt-4">{{ profile.name }}</h1>
        <h2 class="text-darkBlue text-s mt-1">{{ profile.email }}</h2>
      </div>
      <div class="mt-8 flex bg-seaGreen w-4/5 h-16 rounded-full justify-evenly">
        <div class="flex flex-col items-center justify-center mr-2">
          <h1 class="font-medium text-offWhite text-2xl">{{ profile.followersCount }}</h1>
          <h1 class="text-xs text-offWhite">Followers</h1>
        </div>
        <div class="flex flex-col items-center ml-2 justify-center">
          <h1 class="font-medium text-offWhite text-2xl">{{ profile.followingCount }}</h1>
          <h1 class="text-xs text-offWhite">Following</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture";
import ProfileServices from "@/services/ProfileServices";
export default {
  name: "WidgetBox",
  components: {
    ProfilePicture
  },
  async mounted() {
    const profile = await ProfileServices.getProfile({
      userid: localStorage.getItem("userid")
    });
    this.profile = profile.data["user"];
  },
  data() {
    return {
      profile: {}
    };
  }
};
</script>

<style scoped lang="scss"></style>
