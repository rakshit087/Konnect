<template>
  <form id="loginForm">
    <input placeholder="Email" class="dInput" v-model="email" />
    <input
      placeholder="Password"
      type="password"
      v-model="password"
      class="dInput"
    />
    <button type="button" class="btn rippleRed" v-on:click="login()">
      Login
    </button>
  </form>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      });
      console.log(response);
    }
  }
};
</script>

<style scoped lang="scss">
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  width: 90%;
  input,
  button {
    margin: 2% 0;
  }
}
</style>
