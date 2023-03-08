<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="true"
    />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  // 接受父组件传过来的标题
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
  //定义方法
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("点击了右侧按钮");
    },
  },
};
</script>

<style scoped>
.van-nav-bar {
  background-color: #6ee1d4;
  color: #ffffff;

  .van-nav-bar__title {
    font-size: 18px;
    color: #158380;
  }
}
</style>
