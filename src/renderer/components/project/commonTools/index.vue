<template>
  <div class="common-tools">
    <login />
    <!-- 登录 -->
    <div class="login" @click="login">
      <div class="head-image">
        <img src="@/assets/img/head-img.png" alt="" />
      </div>
      <div class="name">未登录</div>
    </div>
  </div>
</template>

<script>
import login from "@/components/project/login"
export default {
  components: {
    login
  },
  methods: {
    login() {

      // window.open("/home")
    }
  }
}
</script>

<style lang="scss" scoped>
.common-tools {
  display: flex;
  align-items: center;
  -webkit-app-region: no-drag;
  .login {
    display: flex;
    align-items: center;
  }
  .head-image {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 6px;
    cursor: pointer;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .name {
    font-size: 12px;
    color: #fff;
    cursor: pointer;
  }
}
</style>