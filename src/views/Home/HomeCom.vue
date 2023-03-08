<template>
  <div class="home-container">
    <!--    引入NavBar组件-->
    <NavBar :title="title"></NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/Border/NavBar.vue";
import request from "@/utils/request";

export default {
  name: "HomeCom",
  components: { NavBar },
  //给子组件传值
  data() {
    return {
      title: "头条",
      //分页
      page: 1,
      //每页显示多少数据
      limit: 10,
    };
  },
  methods: {
    //登入后刷新首页，接受ArticleCom传过来的值
    async initArticleComData() {
      // 发起了GET请求，获取了文章的列表数据
      const { data: res } = await request.get("/articles", {
        // 1.请求数据
        // 2.传递了两个参数，分别是页码和每页显示多少条数据
        params: {
          _page: this.page,
          _limit: this.limit,
        },
      });
      console.log(res);
    },
  },
  // DOM创建时执行
  created() {
    //登入后刷新首页，接受ArticleCom传过来的值
    this.initArticleComData();
  },
};
</script>

<style scoped lang="less">
.home-container {
  padding: 46px 0 50px 0;
}
</style>
