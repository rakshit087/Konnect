<template>
  <div class="container">
    <div class="leftBox">
      <div>
        <h2>Konnect To</h2>
        <br />
        <h1>{{ selected }}</h1>
      </div>
    </div>
    <div class="rightBox">
      <h1>Konnect to What <span>Matters</span></h1>
      <SignUpForm v-if="signupClicked" />
      <LoginForm v-if="loginClicked" />
      <div class="btnContainer">
        <button
          v-if="!signupClicked && !loginClicked"
          v-on:click="clickLogin()"
          class="btn rippleGreen"
        >
          Log In
        </button>
        <button
          v-if="!loginClicked && !signupClicked"
          v-on:click="clickSignup()"
          class="btn rippleGreen"
        >
          Sign Up
        </button>
        <button
          v-if="loginClicked || signupClicked"
          v-on:click="resetClicked()"
          class="btn rippleGreen"
        >
          Back
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.leftBox {
  width: 60%;
  background-color: #f5f5f5;
  div {
    position: relative;
    top: 50%;
    margin: 0 50px;
    h1 {
      display: inline;
      padding-right: 30px;
      font-size: 4.5rem;
      color: #fc5185;
      font-weight: 900;
      overflow: hidden;
      border-right: 0.15em solid orange;
      animation: blink-caret 0.75s step-end infinite;
    }
    h2 {
      font-size: 2.5rem;
      color: #3fc1c9;
    }
  }
}
.rightBox {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    position: relative;
    bottom: 5%;
    font-size: 1.5rem;
    color: #364f6b;
    span {
      color: #fc5185;
    }
  }
  .btnContainer {
    text-align: center;
    width: 70%;
    margin-top: 5%;
    button {
      margin-top: 5%;
    }
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>

<script>
import LoginForm from "@/components/LoginForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";
export default {
  components: {
    LoginForm,
    SignUpForm
  },

  data() {
    return {
      keywords: [
        "POSSIBILITIES",
        "PEOPLE",
        "FUN",
        "COLLEAGUES",
        "OPPORTUNITIES",
        "IDEAS"
      ],
      selected: "",
      loginClicked: false,
      signupClicked: false
    };
  },
  methods: {
    resetClicked: async function() {
      await new Promise(r => setTimeout(r, 250));
      this.loginClicked = false;
      this.signupClicked = false;
    },
    clickLogin: async function() {
      await new Promise(r => setTimeout(r, 250));
      this.loginClicked = true;
    },
    clickSignup: async function() {
      await new Promise(r => setTimeout(r, 250));
      this.signupClicked = true;
    }
  },
  async mounted() {
    for (var i = 0; i < 6; i++) {
      var selected = this.keywords[i];
      for (let c of selected) {
        this.selected = this.selected + c;
        await new Promise(r => setTimeout(r, 150));
      }
      await new Promise(r => setTimeout(r, 3000));
      this.selected = "";
      if (i == 5) {
        i = 0;
      }
    }
  }
};
</script>
