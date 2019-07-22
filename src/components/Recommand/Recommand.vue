<template>
  <div class="container">
    <div class="swiper-ad">
      <mt-swipe :show-indicators="false">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">正在上映</el-menu-item>
        <el-menu-item index="2">即将上映</el-menu-item>
      </el-menu>
      <div class="swiper-movies">
        <div scroll-x="true" style="width: 100%">
          <view class="swiper-item" v-for="(item,index) in imgUrls" :key="index">
            <img :src="item" />
          </view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      imgUrls: ""
    };
  },
    components: {
        
    },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #ffffff;
}
.el-menu-item {
  font-size: 18px;
  padding: 0 10px;
}
/* .el-menu.el-menu--horizontal {
   border-bottom: solid 1px #ffffff; 
} */
.swiper-ad {
  width: auto;
  height: 80px;
  margin: 12px;
  background: pink;
  border-radius: 10px;
}
.swiper-home{
    width: 100%;
    height: 162rpx;
    box-sizing: border-box;
    display: flex;
    white-space: nowrap;
}
.swiper-item{
    width: 216rpx;
    height: 100%;
    display: inline-block;
    border: 1px solid #000;
}
.swiper-item img{
    max-width: 100%;
    max-height: 100%;
}
</style>
