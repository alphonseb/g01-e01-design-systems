<template>
  <component :is="tag" :class="`a-text--${type}`" :type="inputType">
    <slot />
  </component>
</template>

<script>
export default {
  name: "WoofText",
  props: {
    tag: {
      type: String,
      default: "p"
    },
    type: {
      type: String,
      default: "body-m",
      validator(value) {
        const validTextStyles = [
          "body-m",
          "body-l",
          "small-l",
          "title-m",
          "title-l"
        ];
        return validTextStyles.includes(value);
      }
    },
    inputType: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
@import "./WoofText.scss";
</style>
