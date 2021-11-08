<template>
  <div>
    <hr style="border-top: 3px dashed #bbb" />

    <div class="item__wrapper">
      <div class="item-row">
        <p class="key">Med Name :</p>
        <p class="value">{{ `${patientMedication.medicationName}` }}</p>
      </div>
      <div class="item-row">
        <p class="key">Unit:</p>
        <p class="value">{{ `"${patientMedication.unit}"` }}</p>
      </div>
      <div class="item-row">
        <p class="key">Strength:</p>
        <p class="value">{{ patientMedication.strength }}</p>
      </div>
      <div class="item-row">
        <p class="key">Form:</p>
        <p class="value">{{ `${patientMedication.form}` }}</p>
      </div>
      <div class="item-row">
        <p class="key">ExpDate:</p>
        <p class="value">{{ patientMedication.expDate }}</p>
      </div>
    </div>
    <hr style="border-top: 3px dashed #bbb" />
  </div>
</template>

<script>
export default {
  name: "MedItem",
  props: {
    patientMedication: {
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
