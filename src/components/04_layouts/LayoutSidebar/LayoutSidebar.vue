<template>
  <div class="l-sidebar">
    <side-bar />
    <main style="position: relative;">
      <slot />
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/03_organisms/SideBar/SideBar.vue";
export default {
  name: "LayoutSidebar",
  components: {
    SideBar
  }
};
</script>

<style lang="scss">
@import "./LayoutSidebar.scss";
</style>
