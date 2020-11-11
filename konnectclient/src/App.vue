<template>
  <!-- To render the Routes Here -->
  <router-view />
</template>

<style>
/* These classes are Global and can be used in any component */
.dInput {
  width: 90%;
  height: 2.5rem;
  border: 1px solid #3fc1c9;
  text-align: center;
  color: #fc5185;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 24px;
}
.dInput:focus {
  outline: none;
  border: 2px solid #3fc1c9;
}
.dInput::placeholder {
  color: #e4527e8f;
  font-size: 1rem;
}

.btn {
  width: 90%;
  height: 3rem;
  color: #f5f5f5;
  border: none;
  border-radius: 24px;

  font-size: 1.2rem;
  font-weight: 500;
}

.btn:focus {
  outline: none;
}

.rippleGreen {
  background-color: #3fc1c9;
  background-position: center;
  transition: background 0.8s;
}
.rippleGreen:hover {
  background: #3fc1c9 radial-gradient(circle, transparent 1%, #3fc1c9 1%)
    center/15000%;
}
.rippleGreen:active {
  background-color: #3fc2c9e0;
  background-size: 100%;
  transition: background 0s;
}

.rippleRed {
  background-color: #fc5185;
  background-position: center;
  transition: background 0.8s;
}
.rippleRed:hover {
  background: #fc5185 radial-gradient(circle, transparent 1%, #fc5185 1%)
    center/15000%;
}
.rippleRed:active {
  background-color: #fc5184a1;
  background-size: 100%;
  transition: background 0s;
}
</style>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  //Run This Script as soon as App starts, used to validate the saved tokens
  async beforeCreate() {
    if (localStorage.getItem("token") != null) {
      // console.log(localStorage.getItem("token"))
      const response = await AuthenticationService.authenticate(
        {},
        {
          headers: {
            authtoken: localStorage.getItem("token")
          }
        }
      );
      // console.log(response);
      if (response.data.error) {
        // console.log(response.data.err)
        this.$store.dispatch("logout");
      } else {
        console.log("Authenticated");
        this.$store.dispatch("authenticate");
      }
    }
  }
};
</script>
