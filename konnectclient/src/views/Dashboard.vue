<template :key="name">
  <div class="w-screen h-screen flex">
    <Sidebar />
    <component :is="comp"></component>
    <WidgetBox />
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import { defineAsyncComponent } from "vue";
import WidgetBox from "@/components/WidgetBox";
export default {
  name: "Dashboard",
  components: {
    Sidebar,
    WidgetBox
  },
  props: {
    name: {
      type: String,
      default: "Home"
    }
  },
  computed: {
    comp() {
      return defineAsyncComponent(() =>
        import("@/components/" + this.name + ".vue")
      );
    }
  }
};
</script>
