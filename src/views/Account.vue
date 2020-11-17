<template>
  <div class="account">
    <layout-sidebar>
      <div class="account__main-wrapper">
        <woof-text class="account__title" tag="h1" type="title-l"
          >Account</woof-text
        >
        <login-form class="account__form" />
        <danger-zone />
        <img
          class="account__paws"
          src="@/assets/images/paws.png"
          alt="small paws"
        />
      </div>
    </layout-sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
import WoofText from "@/components/01_atoms/WoofText/WoofText.vue";
import LayoutSidebar from "@/components/04_layouts/LayoutSidebar/LayoutSidebar.vue";
import LoginForm from "@/components/03_organisms/LoginForm/LoginForm.vue";
import DangerZone from "@/components/03_organisms/DangerZone/DangerZone.vue";

export default {
  name: "Account",
  components: {
    LayoutSidebar,
    LoginForm,
    DangerZone,
    WoofText
  }
};
</script>

<style lang="scss">
@import "./Account.scss";
</style>
