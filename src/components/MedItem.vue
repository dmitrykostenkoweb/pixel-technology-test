<template>
  <div>
    <hr style="border-top: 3px dashed #bbb" />

    <div class="item__wrapper">
      <div class="item-row">
        <p class="key">Med Name :</p>
        <p class="value">{{ `${med.medicationName}` }}</p>
      </div>
      <div class="item-row">
        <p class="key">Unit:</p>
        <p class="value">{{ `"${med.unit}"` }}</p>
      </div>
      <div class="item-row">
        <p class="key">Strength:</p>
        <p class="value">{{ med.strength }}</p>
      </div>
      <div class="item-row">
        <p class="key">Form:</p>
        <p class="value">{{ `${med.form}` }}</p>
      </div>
      <div class="item-row">
        <p class="key">ExpDate:</p>
        <p class="value">{{ med.expDate }}</p>
      </div>
    </div>
    <hr style="border-top: 3px dashed #bbb" />
  </div>
</template>

<script>
export default {
  name: "MedItem",
  props: {
    med: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
