<template>
  <div></div>
</template>

<script>
import { remote } from 'electron';
export default {
  methods: {
    minimizeWin() {
      console.log("点击最小化")
      remote.getCurrentWindow().minimize()
    },
  }
}
</script>

<style>
</style>