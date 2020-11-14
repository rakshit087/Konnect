<template>
  <div class="w-1/5 bg-offWhite flex flex-col items-center justify-between">
    <div class="mt-12 w-1/2 flex flex-col items-center">
      <ProfilePicture />
      <h1 class="text-darkBlue font-bold text-xl mt-4">Rakshit Arora</h1>
    </div>
    <div>
      Search
    </div>
  </div>
</template>

<script>
import ProfilePicture from "./ProfilePicture";
export default {
  name: "WidgetBox",
  components: {
    ProfilePicture
  }
};
</script>

<style scoped lang="scss">
</style>
