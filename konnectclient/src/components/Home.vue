<template>
  <div class="flex flex-col justify-between w-3/5 h-screen">
    <Krates />
    <CreateKrate />
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
  }
};
</script>
