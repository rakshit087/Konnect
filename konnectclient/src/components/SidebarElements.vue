<template>
  <div class="mx-0 my-20">
    <button
      v-for="(element, index) in sidebarElements"
      v-bind:key="index"
      v-on:click="handleClick(element)"
      v-bind:class="{ active: $route.params.name == element.title }"
      class="flex py-2 px-4 mt-4 ml-10 text-darkBlue bg-none border-none justify-center items-center"
    >
      <i v-bind:class="`${element.icon}`" class="text-2xl mr-3 text-left"></i>
      <p>{{ element.title }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "SidebarElements",

  data() {
    return {
      sidebarElements: [
        { icon: "fas fa-home", title: "Home", id: "home" },
        { icon: "fas fa-poll-h", title: "Buzz", id: "buzz" },
        { icon: "fas fa-hashtag", title: "Explore", id: "explore" },
        { icon: "far fa-bell", title: "Notifications", id: "notifications" },
        { icon: "far fa-user", title: "Profile", id: "profile" }
      ],

      active: "Home"
    };
  },
  methods: {
    handleClick(element) {
      this.$router.push({
        name: "dashboard",
        params: { name: element.title }
      });
    }
  }
};
</script>

<style scoped>
p {
  font-size: 1.125rem;
  font-weight: 600;
  text-align: left;
}
button:hover {
  background-color: #fc518410;
  border-radius: 9999px;
  padding-right: auto;
  color: #fc5185;
}
button:focus {
  outline: none;
}
.active {
  color: #fc5185;
}
</style>
