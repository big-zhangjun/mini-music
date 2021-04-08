<template>
  <div class="layout">
    <menus />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import menus from '@/components/project/menus';

export default {
  components: {
    menus
  }
}
</script>

<style>
.layout {
  display: flex;
}
</style>