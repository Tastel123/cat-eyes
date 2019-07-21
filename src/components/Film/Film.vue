<template>
  <div class="container">
    <mt-header title="">
      <router-link to="/" slot="left">
        <mt-button icon="back">金逸ShowBox影城</mt-button>
        <mt-button @click="handleClose"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="header">
      <div class="cinemaName">金逸ShowBox影城（经开乐盈店）</div>
      <div class="address">青山湖区经开区枫林西大街299号乐盈广场</div>
      <div class="GPSIcon">
        <div class="more">
          <van-icon name="arrow" />
        </div>
        <br />
        <div class="GPS">
          <van-icon name="location-o" />
        </div>
      </div>
      <div class="service">
        <div class="left">
          <div class="left-title">观影套餐</div>
          <div class="left-desc">小吃、周边28元起</div>
        </div>
        <div class="right">
          <div class="right-title">折扣卡</div>
          <div class="right-desc">续费首单2张立减6元</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Film"
};
</script>

<style>
.mint-header {
    background-color: #dc403a !important;
}

.header {
  width: 100%;
  height: 130px;
  padding: 12px;
  box-sizing: border-box;
  background: #ffffff;
  text-align: left;
  /* background: gray; */
}
.cinemaName {
  width: 76%;
  font-size: 16px;
  font-weight: 700;
  float: left;
}
.address {
  /* position: absolute; */
  display: inline-block;
  height: 20px;
  margin-top: 2px;
  width: 76%;
  font-size: 14px;
}
.GPSIcon {
  width: 24%;
  height: 50px;
  float: right;
  display: flex;
  position: absolute;
  top: 50px;
  right: 5px;
  /* background: pink; */
}
.more {
  flex: 0.5;
  position: absolute;
  left: 25%;
  top: 35%;
}
.GPS {
  flex: 0.5;
  width: 20px;
  height: 20px;
  float: right;
  position: absolute;
  left: 75%;
  top: 35%;
}
.service {
  height: 50px;
  width: 100%;
  position: relative;
  margin-top: 8px;
  font-size: 0;
}
.left,
.right {
  height: 50px;
  width: 48%;
  top: 0;
  position: absolute;
  border-radius: 5px;
}
.left {
  background: #fdf2eb;
  left: 0;
  border: 1px solid #ece4dd;
  color: #f47658;
}
.right {
  background: #fff8eb;
  right: 0;
  border: 1px solid #ece9d9;
  color: #e4b465;
}
.left-title,
.right-title {
  font-size: 14px;
  margin-top: 6px;
  margin-left: 12px;
  display: inline-block;
  font-weight: 700;
}
.left-desc,
.right-desc {
  font-size: 12px;
  margin-bottom: 8px;
  margin-left: 12px;
  display: inline-block;
}
</style>
