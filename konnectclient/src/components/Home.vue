<template>
  <div class="flex flex-col justify-between w-3/5 h-screen">
    <Krates :key="refreshC" />
    <CreateKrate @krate-posted="refresh()" />
  </div>
</template>

<script>
import Krates from "@/components/Krates";
import CreateKrate from "@/components/CreateKrate";
export default {
  name: "Home",
  components: {
    Krates,
    CreateKrate
  },
  methods: {
    refresh() {
      this.refreshC = !this.refreshC;
    }
  },
  data() {
    return {
      refreshC: 0
    };
  }
};
</script>
