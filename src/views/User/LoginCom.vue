<template>
  <div>
    <!--    用户登入认证-->
    <van-cell-group>
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        clearable
        required
      />
      <van-field
        v-model="password"
        label="密码"
        placeholder="请输入密码"
        clearable
        required
        type="password"
      />
      <van-button type="primary" @click="login">登入</van-button>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "LoginCom",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      // 如果登入成功，登入到对应的个人首页
      this.$router.push("/user");
    },
  },
};
</script>

<style scoped></style>
