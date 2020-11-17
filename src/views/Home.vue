<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <login-form />
    <woof-button buttonTitle="settings" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import LoginForm from "@/components/03_organisms/LoginForm/LoginForm.vue";
import WoofButton from "@/components/02_molecules/WoofButton/WoofButton.vue";

export default {
  name: "Home",
  components: {
    LoginForm,
    WoofButton
  }
};
</script>

<style lang="scss"></style>
