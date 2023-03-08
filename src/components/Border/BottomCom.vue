<template>
  <div>
    <!--底部组件-->
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o"> 首页</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="friends-o"
        >我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "BottomCom",
};
</script>

<style scoped></style>
