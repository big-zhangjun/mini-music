<template>
  <div class="home">
    <tags />
    <slider :list="banners" />
  </div>
</template>

<script>
import tags from "@/components/common/tags"
import slider from "@/components/common/slider"
import {
  getBannerList,
  getBlockPage
} from '@/network/home';
export default {
  data() {
    return {
      banners: []
    }
  },
  mounted() {
    this.getBannerListFun()
    this.getBlockPageFun()
  },
  components: {
    tags,
    slider
  },
  methods: {
    async getBlockPageFun() {
      let res = await getBlockPage()
      console.log(res)
    },
    async getBannerListFun() {
      const res = await getBannerList()
      this.banners = res.banners
    },
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 24px 30px;
}
</style>>
