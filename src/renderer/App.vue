<template>
  <div id="app">
    <titleBar />
    <router-view></router-view>
  </div>
</template>

<script>
import titleBar from './components/titleBar';
export default {
  name: 'mini-music',
  components: {
    titleBar
  }
}
</script>

<style lang="scss">
@import url("~@/assets/css/normalize.css");
@import url("~@/assets/css/base.css");
@import url("~@/assets/iconfont/iconfont.css");
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 20px;
}
/* CSS */
</style>
