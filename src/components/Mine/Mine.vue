<template>
    <div class="container">
        <div class="header">
            <div class="avatar">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3336648072,555711710&fm=15&gp=0.jpg" alt="">
            </div>
            <div class="name">Tastel</div>
            <div class="icon-top">
                <i class="icon"></i>
            </div>
            <div class="detail">
                <span>个人主页</span>
                
            </div>
            <div class="tabbar">
               <i class="icon"></i>
                <span>轨迹</span> 
                <span>电影9</span>
                <span>剧集0</span>
                <span>综艺0</span>
                <span>书籍0</span>
                <span>收藏0</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.header
    height 180px
    background-color #e8323c
    color #fff
    // background -moz-linear-gradient(top, red, #000)
    .avatar
        position absolute
        left 18px
        top 30px
        float left
        img
            width 60px
            height 60px
            border-radius 50%
    .name
        position absolute
        top 45px
        left 90px
        font-size 24px
        font-weight 500
    .detail
        width 90px
        height 28px
        background-color #e76a6b
        float right
        position relative
        margin-top 40px
        border-radius 20px 0 0 20px
        span
            text-align center
            color #fff
    .tabbar
        position absolute
        // background-color blue
        top 120px
        display flex
        span 
            margin-left 18px

</style>
