<template>
    <div class="item__wrapper">
      <div class="item-row">
        <p class="key">Full Name :</p>
        <p class="value">{{ `${pat.name} ${pat.lastName}` }}</p>
      </div>
      <div class="item-row">
        <p class="key">Adress:</p>
        <p class="value">{{ `"${pat.adress}"` }}</p>
      </div>
      <div class="item-row">
        <p class="key">Phone:</p>
        <a class="value" href="{{ pat.phoneNumber }}">{{ pat.phoneNumber }}</a>
      </div>
      <div class="item-row">
        <p class="key">Age:</p>
        <p class="value">{{ `${pat.age} years` }}</p>
      </div>
      <div class="item-row">
        <p class="key">Gender:</p>
        <p class="value">{{ pat.gender }}</p>
      </div>

      <button class="btn" @click="$emit('show', pat)" type="button">
        Show Medicines
      </button>
    </div>
</template>

<script>
export default {
  components: {},
  name: "PatItem",
  props: {
    pat: {
      type: Object,
      required: true,
    },
    patientMedication: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
