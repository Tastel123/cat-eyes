<template>
  <div class="container">
    <!-- <div class="header">
      <mt-header title="影院">
        <router-link to="/" slot="left">
          <mt-button icon="back">南昌</mt-button>
        </router-link>
        <mt-button icon="search" slot="right"></mt-button>
      </mt-header>
    </div>-->
    <div class="swiper">
      <mt-swipe :show-indicators="false">
        <mt-swipe-item>
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1070822383,923511154&fm=26&gp=0.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3483207131,1788469706&fm=26&gp=0.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=449345765,1392573695&fm=26&gp=0.jpg" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="downloadMenu">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </div>
    <div class="content" v-for="(item, index) in cinema" :key="index">
      <div class="cinema">
        <div class="cinemaName">{{item.cinemaName}}</div>
        <div class="price">
          <div class="number"> {{item.price}}元</div>
          <span>起</span> 
        </div>
      </div>
      <div class="location">
        <div class="address">{{item.address}}</div>
        <span class="distance">{{item.distance}}km</span>
      </div>
      <!-- <div class="Characteristic" v-for="(small, index) in item.small" :key="index"> -->
      <div class="Characteristic" >
        <div class="small" v-for="(u,i) in small1">{{u}}</div>
          <!-- <div class="small" >{{small}}</div>
          <div class="small" >{{small.tui}}</div>
          <div class="small" >{{small.chi}}</div>
          <div class="small">{{small.gai}}</div>
          <div class="small">{{small.zhe}}</div>
          <div class="small">{{small.ting}}</div> -->         
      </div>
      <div class="detail">
        <div class="hui">惠 扫毒2天下对决等12部影片特惠</div>
        <div class="cu">促 影院特惠促销</div>
        <div class="ka">卡 限时￥15.9促销开卡，首单更优惠</div>
      </div>
    </div>
      

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Cinema",
  components: {},
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "A",
      option1: [
        { text: "品牌", value: 0 },
        { text: "万达影城", value: 1 },
        { text: "金逸影城", value: 2 },
        { text: "大地影城", value: 3 },
        { text: "星美国际影城", value: 4 },
        { text: "17.5影城", value: 5 },
        { text: "恒大影城", value: 6 },
        { text: "博纳影城", value: 7 }
      ],
      option2: [
        { text: "全城", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "距离近", value: "A" },
        { text: "价格低", value: "B" }
      ],
      cinema: [],
      // small1: [{"a": "退"},{"a": "改签"},{"a": "小吃"},{"a": "折扣卡"}],
      // small2: [{"a": "改签"},{"a": "小吃"},{"a": "折扣卡"}],
      // small3: [{"a": "杜比全景声厅"},{"a": "改签"},{"a": "小吃"},{"a": "折扣卡"}],
      small1: ["退","改签","小吃","折扣卡"],
      small2: ["改签","小吃","折扣卡","杜比全景声厅"],
      small3: ["改签","小吃","折扣卡"]
       
    };
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5ca457f0c4e9a575b66b6265/example/yingyuan')
      .then(res => {
        console.log(res)
        this.cinema = res.data.data
        this.small = res.data.data.small
        console.log(res.data.data)
          
    })
  }
  
};
</script>
<style>

.swiper {
  height: 90px;
  background: yellow;
}

.van-dropdown-menu__title--down , .van-icon-success:before{
     color: #dc403a !important;
   }
/* .van-dropdown-menu__item {
  border-right: 1px solid #000;
} */
.content {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid #EBEBEB;
}
.cinema {
  position: relative;
  margin-bottom: 5px;
  height: 35px;
}
.cinemaName {
  float: left;
  font-size: 18px;
  font-weight: 700;
  margin-top: 5px;
  color: #5b5b5b;
}
.price {
  float: right;
  margin-top: 10px;
}
.number{
  display: inline;
  font-size: 17px;
  font-weight: 700;
  color: #dc403a;
}
.price span{
  font-size: 14px;
  color: #939393;
}
.location {
  height: 25px;
  color: #939393;
}
.address {
  display: inline-block;
  font-size: 16px;
 
  /* overflow: hidden;
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:1; */
  white-space: nowrap;        /* 不换行 */
  overflow: hidden;           /* 内容超出宽度时隐藏超出部分的内容 */
  text-overflow: ellipsis; 
  width: 300px;  
  text-align: left;
}
.distance {
  float: right;
}
.Characteristic {
  height: 25px;
  margin-top: 5px;
  width: 100%;
}
.small {
  border: 1px solid #ff736d;
  float: left;
  padding: 2px 4px 2px 1px;
  color: #dc403a;
  margin-right: 5px;
  font-size: 14px;
}
.detail {
  margin-top: 5px;
  height: 70px;
  width: 100%;
  margin-bottom: 5px;
}
.hui, .cu, .ka{
  width: 100%;
  text-align: left;
  font-size: 14px;
  margin-top: 5px;
  color: #c0c0c0;
}
</style>