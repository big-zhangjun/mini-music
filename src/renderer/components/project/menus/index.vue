<template>
  <div class="menus">
    <div v-for="item in menus" :key="item.path">
      <!-- <div class="item">
        <div class="iconfont" :class="item.icon"></div>
        <div>{{ item.name }}</div>
      </div> -->
      <router-link class="item" :to="item.path">
        <div class="iconfont" :class="item.icon"></div>
        <div>{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "发现",
          path: "/home",
          icon: "icon-faxian-copy"
        },
        {
          name: "歌手",
          path: "/singer",
          icon: "icon-geshou"
        },
        {
          name: "排行",
          path: "/ranking",
          icon: "icon-paihang"
        },
        {
          name: "视频",
          path: "/video",
          icon: "icon-shipin3"
        },
        {
          name: "朋友",
          path: "/friend",
          icon: "icon-pengyou"
        },
        // {
        //   name: "直播",
        //   path: "/live",
        //   icon: "icon-faxian-copy"
        // },

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.menus {
  min-width: 140px;
  height: calc(100vh - 60px);
  overflow: hidden;
  border-right: 1px solid $--border-color-gray;
  padding: 10px;
  box-sizing: border-box;
  .router-active {
    // background-color: red;
    background-image: linear-gradient(to right, #84b2fe, #5192fe);
    color: #fff !important;
    .iconfont {
      color: #fff !important;
    }
  }
  .item {
    display: flex;
    line-height: 38px;
    justify-content: center;
    margin: 16px 0;
    cursor: pointer;
    border-radius: 6px;
    color: #333;
    &:hover {
      background-color: #f7f7f7;
    }
    .iconfont {
      margin-right: 6px;
      color: $--subject-color-blue;
    }
  }
}
</style>