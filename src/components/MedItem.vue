<template>
  <div class="item paper">
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
<style scoped>
.item {
padding: 10px;
}
.key {
  font-size: 12px;
  font-weight: 400;
  color: rgb(75, 75, 75);
  text-shadow: -1px 1px 5px rgb(255, 255, 255);
}
.value {
  font-size: 14px;
  font-weight: 600;
  color: black;
}
.item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  padding: 2px;
}
</style>
