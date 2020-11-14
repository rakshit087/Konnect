<template>
  <div>
    <p>{{ message }}</p>
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
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      message: ""
    };
  },
  methods: {
    async login() {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      });
      if (response.data.error) {
        this.message = response.data.error;
      } else if (response.data.token) {
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("authenticate");
        this.$router.push("/Home");
      }
    }
  }
};
</script>

<style scoped lang="scss">
div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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
