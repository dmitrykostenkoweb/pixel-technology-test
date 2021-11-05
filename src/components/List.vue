<template>
  <div class="wrapper">
    <h2>Patient List</h2>
    <div class="list">
      <pat-item
        class="paper list__item"
        v-for="pat in patients"
        :pat="pat"
        :newMedicine="newMedicine"
        :key="pat.id"
        @show="$emit('show', pat)"
      />
    </div>
  </div>
</template>

<script>
import PatItem from "./PatItem.vue";

export default {
  name: "List",

  components: { PatItem },

  props: {
    patients: {
      type: Array,
      required: true,
    },
    newMedicine: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },

  computed: {},
  methods: {},
};
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.list__item {
  padding: 10px;
}

</style>
