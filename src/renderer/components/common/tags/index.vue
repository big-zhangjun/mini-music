<template>
  <div class="tags">
    <div v-for="item in list" :key="item">{{ item }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["个性", "主页", "歌单"]
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  font-size: 16px;
  .active {
    font-weight: 600;
    font-size: 20px;
  }
}
</style>