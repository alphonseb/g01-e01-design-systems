<template>
  <woof-text
    class="a-text-input"
    :class="{ 'a-text-input--error': hasError }"
    tag="input"
    type="input"
    :input-type="inputType"
  />
</template>

<script>
import WoofText from "@/components/01_atoms/WoofText/WoofText.vue";
export default {
  name: "TextInput",
  components: {
    WoofText
  },
  props: {
    hasError: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: "text"
    }
  }
};
</script>

<style lang="scss">
@import "./TextInput.scss";
</style>
