<template>
  <div>sasdfds s</div>
</template>

<script>
import { getBannerList } from '@/network/home';
export default {
  mounted() {
    this.getBannerListFun()
  },
  methods: {
    async getBannerListFun() {
      const res = await getBannerList()
      console.log(res)
    }
  }
}
</script>

<style>
</style>