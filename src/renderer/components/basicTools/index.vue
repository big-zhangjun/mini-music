<template>
  <div class="basic-tools">
    <div class="advance iconfont icon-qianjin"></div>
    <div class="back iconfont icon-qianjin"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.basic-tools {
  display: flex;
  align-items: center;
  -webkit-app-region: no-drag;
  margin-left: 80px;
  .advance,
  .back {
    font-size: 10px;
    cursor: pointer;
    color: #fff;
    width: 26px;
    background-color: rgba(255, 255, 255, 0.1);
    text-align: center;
    line-height: 26px;
    border-radius: 50%;
  }
  .back {
    transform: rotate(180deg);
    margin-left: 6px;
  }
}
</style>