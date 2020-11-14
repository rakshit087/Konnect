<template>
  <p>{{ message }}</p>
  <form id="signupForm">
    <input type="text" v-model="name" placeholder="Your Name" class="dInput" />
    <input
      type="email"
      v-model="email"
      placeholder="Yout VIT Mail"
      class="dInput"
    />
    <input
      type="password"
      v-model="password"
      placeholder="Set a Password"
      class="dInput"
    />
    <button
      type="button"
      name="Sign Up"
      @click="signup()"
      class="btn rippleRed"
    >
      Sign Up
    </button>
  </form>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      message: ""
    };
  },
  methods: {
    async signup() {
      const response = await AuthenticationService.register({
        name: this.name,
        email: this.email,
        password: this.password
      });
      if (response.data.error) {
        this.message = response.data.error;
      } else if (response.data.user) {
        this.$router.push("/Home");
      }
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
