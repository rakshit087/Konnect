<template>
  <div class="w-screen h-screen flex">
    <div class="leftBox bg-offWhite w-3/5">
      <div>
        <h2>Konnect To</h2>
        <br />
        <h1 class="text-brightRed">{{ selected }}</h1>
      </div>
    </div>
    <div class="rightBox w-2/5 flex flex-col">
      <h1>Konnect to What <span class="text-brightRed">Matters</span></h1>
      <SignUpForm v-if="signupClicked" />
      <LoginForm v-if="loginClicked" />
      <div class="btnContainer" v-if="!$store.state.isAuthenticated">
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
      <div class="btnContainer"
        v-if="$store.state.isAuthenticated">
        <button
          v-on:click="
            () => {
              $router.push('/Home');
            }
          "
          class="btn rippleGreen"
        >
          Start
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.leftBox {
  div {
    position: relative;
    top: 50%;
    margin: 0 50px;
    h1 {
      display: inline;
      padding-right: 30px;
      font-size: 4.5rem;
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
  justify-content: center;
  align-items: center;
  h1 {
    position: relative;
    bottom: 5%;
    font-size: 1.5rem;
    color: #364f6b;
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
    //Button functionality
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
    //Animate the Text
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
