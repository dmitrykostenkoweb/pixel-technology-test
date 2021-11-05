<template>
  <div class="main" id="app">

    <main-content />
  </div>
</template>

<script>
import MainContent from "./components/MainContent.vue";


export default {
  name: "App",
  components: {
    MainContent,
  },
};
</script>

<style>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
