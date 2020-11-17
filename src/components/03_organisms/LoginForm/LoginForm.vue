<template>
  <div class="o-login-form">
    <div class="o-login-form__field-container">
      <form-field label="e-mail" input-type="email" />
      <form-field label="full name" />
    </div>
    <woof-button button-title="save" icon="save" />
  </div>
</template>

<script>
import FormField from "@/components/02_molecules/FormField/FormField.vue";
import WoofButton from "@/components/02_molecules/WoofButton/WoofButton.vue";
export default {
  name: "LoginForm",
  components: {
    FormField,
    WoofButton
  }
};
</script>

<style lang="scss">
@import "./LoginForm.scss";
</style>
