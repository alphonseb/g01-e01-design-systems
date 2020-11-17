<template>
  <button class="m-button">
    <woof-text tag="span" type="body-l">
      {{ buttonTitle }}
    </woof-text>
  </button>
</template>

<script>
import WoofText from "@/components/01_atoms/WoofText/WoofText.vue";
export default {
  name: "WoofButton",
  components: {
    WoofText
  },
  props: {
    buttonTitle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
@import "./WoofButton.scss";
</style>
