<template>
  <div class="system-tools">
    <!-- 最小化客户端 -->
    <div id="mini" class="iconfont icon-zuixiaohua" @click="minimizeWin"></div>
    <!-- 最大化还原窗口 -->
    <div
      class="iconfont"
      :class="isMaxWin ? 'icon-zuidahua' : 'icon-huanyuan'"
      @click="onMinimize"
    ></div>
    <!-- 关闭客户端 -->
    <div class="iconfont icon-guanbi" @click="closeWin"></div>
  </div>
</template>

<script>
import { remote } from 'electron';
export default {
  data() {
    return {
      isMaxWin: false
    }
  },
  methods: {
    minimizeWin() {
      remote.getCurrentWindow().minimize()
    },
    // 最大化还原窗口
    onMinimize() {
      this.isMaxWin = remote.getCurrentWindow().isMaximized()
      if (this.isMaxWin) {
        remote.getCurrentWindow().restore()
      } else {
        remote.getCurrentWindow().maximize()
      }
    },
    closeWin() {
      remote.getCurrentWindow().close();
    }
  }
}
</script>

<style lang="scss" scoped>
.system-tools {
  display: flex;
  .iconfont {
    color: #fff;
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
    -webkit-app-region: no-drag;
  }
}
</style>