<template>
  <div class="bg-offWhite flex justify-center items-center m-auto pt-3">
    <p class="kratecount z-0">{{ krateCharacterCount }}</p>
    <input
      maxlength="150"
      type="text"
      class="krateInput"
      :placeholder="placeholder"
      v-model="krate"
      @input="
        () => {
          this.krateCharacterCount = 150 - this.krate.length;
        }
      "
    />
    <button class="addKrate rippleGreen" @click="postKrate()">
      <i class="fas fa-paper-plane"></i>
    </button>
  </div>
</template>

<script>
import KrateServices from "@/services/KrateServices";
export default {
  data() {
    return {
      krate: "",
      krateCharacterCount: 150,
      placeholder: "Your Thoughts..."
    };
  },
  methods: {
    async postKrate() {
      if (this.krate.length == 0) {
        this.placeholder = "Write Something here Before sending :/";
      } else {
        await KrateServices.post(this.krate);
        this.$emit("krate-posted");
        this.krate = "";
        this.placeholder = "Your Thoughts...";
      }
    }
  }
};
</script>

<style scoped lang="scss">
div {
  width: 98%;
  height: 19%;
}
.krateInput {
  height: 105px;
  width: 80%;
  outline: none;
  border: solid 5px #3fc1c9;
  font-size: 16px;
  color: #fc5185;
  resize: none;
  text-align: center;
}

.krateInput::placeholder {
  color: #fc5185;
  font-size: 16px;
  text-align: center;
  line-height: 100px;
}

.addKrate {
  outline: none;
  border: none;
  height: 105px;
  width: 4rem;
  color: #f5f5f5;
  font-size: 1.5rem;
}
.kratecount {
  position: absolute;
  bottom: 25px;
  left: 69%;
  color: #3fc1c9;
  font-weight: 200;
}
</style>
