<template>
  <div id="app">
    <!--    路由占位符号-->
    <router-view />
    <!--    底部组件-->
    <BottomCom></BottomCom>
  </div>
</template>
<script>
import BottomCom from "@/components/Border/BottomCom.vue";

export default {
  name: "App",
  components: {
    BottomCom,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
