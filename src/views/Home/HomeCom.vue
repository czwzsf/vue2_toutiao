<template>
  <div class="home-container">
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
      title: "头条",
    };
  },
};
</script>

<style scoped lang="less">
.home-container {
  padding: 46px 0 50px 0;
}
</style>
