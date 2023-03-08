<template>
  <div>
    <!--    引入NavBar组件-->
    <NavBar :title="title"></NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/Border/NavBar.vue";

export default {
  name: "HomeCom",
  components: { NavBar },
  //给子组件传值
  data() {
    return {
      title: "首页",
    };
  },
};
</script>

<style scoped lang="less"></style>
