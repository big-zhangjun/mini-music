<template>
  <div class="my-title">
    <div class="left">
      <div class="logo">
        <span class="iconfont icon-wangyiyunyinle icon-logo"></span>
        <span class="title">网易云音乐</span>
      </div>
      <!-- 前进后退搜索 -->
      <basicTools />
    </div>
    <div class="right">
      <!-- 常用工具 -->
      <commonTools />
      <!-- 操作客户端的 -->
      <systemTools />
    </div>
  </div>
</template>

<script>
import systemTools from "@/components/project/systemTools"
import basicTools from "@/components/project/basicTools"
import commonTools from "@/components/project/commonTools"

export default {
  components: {
    systemTools,
    basicTools,
    commonTools
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
  justify-content: space-between;
  .left,
  .right {
    display: flex;
    align-items: center;
  }
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