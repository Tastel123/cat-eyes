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
          <img src="./ad1.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./ad2.jpg" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./ad3.jpg" alt="">
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
    
    <div class="content" v-for="(item, index) in cinema" :key="index" @click="toFilm">
     
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
      <div class="detail" >
        <div class="colorful">
          <div class="hui">惠</div> 
          <span class="desc" v-for="(detail, index) in item.detail" :key="index">{{detail.hui}}</span>
          </div>
        <div class="colorful">   
          <div class="cu">促</div> 
          <span class="desc" v-for="(detail, index) in item.detail" :key="index">{{detail.cu}}</span>
        </div>
        <div class="colorful">
          <div class="ka">卡</div> 
          <span class="desc" v-for="(detail, index) in item.detail" :key="index">{{detail.ka}}</span>
        </div>
        
      </div>
      
    </div>
    

  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
// import film from '@/components/Film/Film'
export default {
  name: "Cinema",
  components: {
   
  },
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
  methods: {
    toFilm() {
      this.$router.push({
        path: '/Cinema/Film',
        name: 'Film'
      })
    }
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5ca457f0c4e9a575b66b6265/example/yingyuan')
      .then(res => {
        console.log(res)
        this.cinema = res.data.data
        this.detail = res.data.data.detail 
        console.log(res.data.data)
          
    })
  }
  
};
</script>
<style>

.swiper {
  height: 120px;
  background: yellow;
}
img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

.van-dropdown-menu__title--down , .van-icon-success:before{
  color: #dc403a !important;
}
/* .van-cell__title {
  color: #dc403a !important;
} */
/* .van-dropdown-menu__item {
  border-right: 1px solid #000;
} */
.van-cell__title{
  text-align: left;
}
.van-cell .van-cell--clickable .span{
     color: #dc403a !important;
}
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
  margin-top: 8px;
  color: #5b5b5b;
}
.price {
  float: right;
  margin-top: 10px;
  position: relative;
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
  position: relative;
}
.address {
  display: inline-block;
  font-size: 16px;
  position: absolute;
  left: 0;
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
  border: 1px solid #61AEBD;
  float: left;
  padding: 2px 4px 2px 1px;
  color: #7FB3BD;
  margin-right: 5px;
  font-size: 14px;
}
.detail {
  margin-top: 5px;
  height: 75px;
  width: 100%;
  margin-bottom: 5px;
}
.colorful {
  width: 100%;
  text-align: left;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 8px;
}
.hui, .cu, .ka  {
  display: inline-block;
  width: 20px;
  height: 20px;
  padding: 0;
  text-align: center;
  color: #ffffff;
}
.hui {
    background-color: #FC9804;
}
.cu {
    background-color: #FB796C;
}
.ka {
    background-color: #A877E4;
}
.desc{
  color: #B4B4B4;
  margin-left: 5px;
}
</style>