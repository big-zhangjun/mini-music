<template>
  <div class="my-title">
    <div class="logo">
      <span class="iconfont icon-wangyiyunyinle icon-logo"></span>
      <span class="title">网易云音乐</span>
    </div>
    <!-- 前进后退搜索 -->
    <basicTools />
    <!-- 操作客户端的 -->
    <systemTools />
  </div>
</template>

<script>
import systemTools from "@/components/systemTools"
import basicTools from "@/components/basicTools"

export default {
  components: {
    systemTools,
    basicTools
  }
}
</script>

<style lang="scss" scoped>
.my-title {
  height: 60px;
  width: 100%;
  background-color: $--subject-color-blue;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  -webkit-app-region: drag;
  .logo {
    display: flex;
    align-items: center;
    min-width: 116px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    -webkit-app-region: no-drag;
    .icon-logo {
      color: $--subject-color-blue;
      background-color: #fff;
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      border-radius: 50%;
      margin-right: 8px;
    }
    .title {
      font-size: 16px;
    }
    span {
      display: block;
    }
  }
}
</style>