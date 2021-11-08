<template>
  <div>
    <h4>Filters:</h4>
    <div class="filter__wrapper">
      <datalist id="name" v-for="data in allData" :key="data.id">
        <option>{{ data.name }}</option>
      </datalist>
      <div>
        <label for="name">Name:</label>
        <input
          id="name"
          list="name"
          type="text"
          placeholder="enter patient name..."
          name="name"
          v-model="name"
          @input="serchName"
        />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          placeholder="enter last name..."
          name="lastName"
        />
      </div>
      <div>
        <label for="adress">Address:</label>
        <input
          id="adress"
          type="text"
          placeholder="enter patient address..."
          name="adress"
        />
      </div>
      <div>
        <label for="phoneNumber">Phone number:</label>
        <input
          id="phoneNumber"
          type="text"
          placeholder="enter patient's phone number..."
          name="phoneNumber"
        />
      </div>
      <div>
        <label for="age">Age:</label>
        <input
          id="age"
          type="text"
          placeholder="enter patient's age..."
          name="age"
        />
      </div>

      <div>
        <label for="gender">Gender:</label>

        <input
          id="gender"
          type="text"
          placeholder="enter patient gender..."
          name="gender"
        />
      </div>
      <div>
        <label for="medicationName">Medication name:</label>
        <input
          id="medicationName"
          type="text"
          placeholder="enter the name of the medicine..."
          name="medicationName"
        />
      </div>
      <div>
        <label for="unit">Unit:</label>
        <input
          id="unit"
          type="text"
          placeholder="enter the units in milligrams..."
          name="unit"
        />
      </div>
      <div>
        <label for="strength">Strength:</label>
        <input
          id="strength"
          type="text"
          placeholder="enter the strength of the medicine..."
          name="strength"
        />
      </div>
      <div>
        <label for="form">Form:</label>
        <input
          id="form"
          type="text"
          placeholder="enter the medication form..."
          name="form"
        />
      </div>
      <div>
        <label for="expDate">Exp. Date:</label>

        <input
          id="expDate"
          type="text"
          placeholder="enter date..."
          name="expDate"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterPanel",
  components: {},
  props: {
    allData: {
      type: Array,
      required: true,
    },
    searchValuesByName: {
      type: String,
    },
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    serchName() {
      this.$emit("serchName", this.name);
    },
  },
};
</script>
<style scoped>
.filter__wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
