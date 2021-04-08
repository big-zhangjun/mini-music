<template>
  <div>
    <div class="slider-container">
      <div class="slider-content">
        <div
          class="slider"
          :class="setClass(idx)"
          v-for="(item, idx) in list"
          :key="idx"
        >
          <img class="slider-img" :src="item.imageUrl" alt="" />
        </div>
        <span class="iconfont icon-next" @click="next"></span>
        <span class="iconfont icon-prev" @click="prev"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    }
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  computed: {

  },
  methods: {
    setClass(i) {
      let next = this.currentIndex === (this.list.length - 1) ? 0 : this.currentIndex + 1
      let prev = this.currentIndex === 0 ? (this.list.length - 1) : this.currentIndex - 1
      switch (i) {
        case this.currentIndex:
          return "active"
          break;
        case next:
          return "next"
          break;
        case prev:
          return "prev"
          break;
        default:
          return ""
      }
    },
    next() {
      this.currentIndex = ++this.currentIndex % this.list.length;
    },
    prev() {
      this.currentIndex = this.currentIndex === 0 ? this.list.length - 1 : this.currentIndex - 1;
    },
  }
}
</script>

<style lang="scss" scoped>
.slider-container {
  width: 100%;
  height: 200px;
  text-align: center;
  position: relative;
}
.slider-content {
  position: relative;
  min-width: 760px;
  max-width: 1100px;
  height: 100%;
  margin: 0px;
  padding: 0px;
  background-size: inherit;
  //   contain: layout;
}
.slider {
  position: absolute;
  margin: 0;
  padding: 0;
  top: 0;
  left: 50%;
  width: 540px;
  height: 100%;
  transition: 500ms all ease-in-out;
  background-repeat: no-repeat;
  background-position: center;
  background-size: inherit;
  transform: translate3d(-50%, 0, -80px);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;

  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -ms-perspective: 1000;
  perspective: 1000;
  /* Other transform properties here */
  z-index: 1;
  overflow: hidden;
  border-radius: 12px;
}
.slider-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.active {
  transform: translate3d(-50%, 0, 0);
  z-index: 20;
}
.prev {
  transform: translate3d(-85%, 0, -100px) scale(0.8);

  z-index: 19;
}
.next {
  transform: translate3d(-15%, 0, -100px) scale(0.8);
  z-index: 18;
}
.icon-next,
.icon-prev {
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  line-height: 30px;
  text-align: center;
  position: absolute;
  transform: translateY(-50%);
  font-size: 12px;
  border-radius: 50%;
  color: #fff;
  top: 50%;
  cursor: pointer;
  z-index: 99;
}
.icon-next {
  right: 10px;
}
.icon-prev {
  left: 10px;
}
</style>