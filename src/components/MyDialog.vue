<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content paper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  display: flex;
  z-index: 100;
}
.dialog__content {
  margin: 20px auto;
  padding: 10px;
  height: max-content;
}
</style>
