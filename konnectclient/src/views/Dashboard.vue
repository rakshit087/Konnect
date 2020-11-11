<template>
  <div class="container">
    <h1>ITS A SECREAT PAGE</h1>
    <button
      type="button"
      @click="
        () => {
          this.$store.dispatch('logout');
          $router.push('/authenticate');
        }
      "
    >
      Logout
    </button>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
};
</script>
