<template>
  <div class="o-danger-zone">
    <div class="o-danger-zone__text-wrapper">
      <woof-text class="o-danger-zone__title" tag="h3" type="small-l"
        >Delete my account</woof-text
      >
      <woof-text class="o-danger-zone__body" tag="p" type="body-m">
        Are you sure you want to delete your account ? <br />
        You’ll permanently loose your informations.
      </woof-text>
    </div>
    <woof-button type="danger" buttonTitle="delete" icon="trash" />
  </div>
</template>

<script>
import WoofText from "@/components/01_atoms/WoofText/WoofText.vue";
import WoofButton from "@/components/02_molecules/WoofButton/WoofButton.vue";
export default {
  name: "DangerZone",
  components: {
    WoofText,
    WoofButton
  }
};
</script>

<style lang="scss">
@import "./DangerZone.scss";
</style>
