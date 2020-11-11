<template>
  <form id="signupForm">
    <input type="text" placeholder="Your Name" name="name" class="dInput" />
    <input
      type="email"
      placeholder="Yout VIT Mail"
      name="email"
      class="dInput"
    />
    <input
      type="password"
      placeholder="Set a Password"
      name="password"
      class="dInput"
    />
    <button name="Sign Up" class="btn rippleRed">Sign Up</button>
  </form>
</template>

<script>
export default {
  name: "SignUpForm"
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
