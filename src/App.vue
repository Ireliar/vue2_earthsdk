<template>
  <div id="app">
    <my-earth />
  </div>
</template>

<script>
import myEarth from "@/components/myEarth.vue";

export default {
  name: "app",
  components: {
    myEarth,
  },
};
</script>

<style lang="less" scoped>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
