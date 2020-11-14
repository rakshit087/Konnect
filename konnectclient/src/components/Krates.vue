<template>
  <div class="flex flex-col custom mt-3 m-auto overflow-y-scroll">
    <div v-for="(data, index) in this.allKrates" v-bind:key="index">
      <SingleKrate :krateData="data" />
    </div>
  </div>
</template>

<script>
import KrateServices from "@/services/KrateServices";
import SingleKrate from "./SingleKrate";
export default {
  data() {
    return {
      allKrates: []
    };
  },
  components: {
    SingleKrate
  },
  async mounted() {
    const response = await KrateServices.get();
    if (response.data.error) {
      this.allKrates = "Internal Error";
    } else {
      this.allKrates = response.data.krates;
    }
  }
};
</script>

<style scoped lang="scss">
.custom{
  width: 98%;
  height:78%;
}
</style>
