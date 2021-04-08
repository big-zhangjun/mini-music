<template>
  <div class="basic-tools">
    <div class="back iconfont icon-qianjin"></div>
    <div class="advance iconfont icon-qianjin"></div>
    <div class="search-box">
      <div class="iconfont icon-sousuo"></div>
      <input class="search" type="text" placeholder="搜索" />
    </div>
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
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
    line-height: 26px;
    border-radius: 50%;
    transition: 0.3s;
    margin-right: 10px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  .back {
    transform: rotate(180deg);
  }
  .search-box {
    position: relative;
    .icon-sousuo {
      color: #fff;
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 12px;
      cursor: pointer;
    }
    .search {
      width: 160px;
      height: 32px;
      border-radius: 32px;
      font-size: 12px;
      outline: none;
      padding: 0 20px 0 32px;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.1);
      color: #fff;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
      font-size: 12px;
    }
    input::-moz-input-placeholder {
      color: #ccc;
      font-size: 12px;
    }
    input::-ms-input-placeholder {
      color: #ccc;
      font-size: 12px;
    }
  }
}
</style>