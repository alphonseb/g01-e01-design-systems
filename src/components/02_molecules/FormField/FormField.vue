<template>
  <div class="m-form-field">
    <woof-text tag="label" type="small-l">{{ label }}</woof-text>
    <text-input :input-type="inputType" />
  </div>
</template>

<script>
import WoofText from "@/components/01_atoms/WoofText/WoofText.vue";
import TextInput from "@/components/01_atoms/TextInput/TextInput.vue";
export default {
  name: "FormField",
  components: {
    WoofText,
    TextInput
  },
  props: {
    label: {
      type: String,
      default: "label"
    },
    inputType: {
      type: String,
      default: "text"
    }
  }
};
</script>

<style lang="scss">
@import "./FormField.scss";
</style>
