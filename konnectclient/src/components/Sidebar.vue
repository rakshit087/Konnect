<template>
  <div class="sidebar w-1/5 bg-offWhite pt-12 flex flex-col justify-between">
    <a href="#" class="text-seaGreen no-underline ml-12">
      Konnect
    </a>
    <SidebarElements />
    <div class="btnContainer w-full mb-12">
      <button
        class="btn rippleGreen"
        @click="
          () => {
            this.$store.dispatch('logout');
            $router.push('authenticate');
          }
        "
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import SidebarElements from "./SidebarElements";

export default {
  name: "Sidebar",
  components: {
    SidebarElements
  }
};
</script>

<style scoped>
a {
  font-weight: 800;
  font-size: 2.7rem;
}
button {
  font-weight: 600;
}
</style>
