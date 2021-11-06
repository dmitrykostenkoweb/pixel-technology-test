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
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  z-index: 99;
  backdrop-filter: blur(5em);
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
.dialog__content {
  margin: 100px auto;
  padding: 10px;
  height: max-content;
}
</style>
