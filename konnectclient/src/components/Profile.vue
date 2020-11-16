<template>
  <div class="w-3/5"></div>
</template>

<script>
export default {
  props: {
    profileId: {
      type: String,
      default: localStorage.getItem("userid"),
      required: true
    }
  },
  data() {
    return {
      isUser: true
    };
  }
};
</script>

<style></style>
