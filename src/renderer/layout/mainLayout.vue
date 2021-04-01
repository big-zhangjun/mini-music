<template>
  <div class="layout">
    <menus />
    <router-view></router-view>
  </div>
</template>

<script>
import menus from '@/components/menus';

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