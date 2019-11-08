<template>
  <div class="he">
    <div class="yv-header">
       <h1>
          <img id="header-img" :src="imgSrc" class="header-img" />
        </h1>
      <div class="yv-header-content">
        
       
        <div class="header-tabs">
          <router-link
            :to="'/' + item.id"
            tag="div"
            @click.native="changeTab(index)"
            class="header-tab"
            :class="[index == activeIndex ? 'tab-active':'']"
            v-for="(item,index) in tabList"
            :key="index"
          >{{ item.text }}</router-link>
        </div>
        <div class="header-login-regist">
          <div class="header-login login-regist">登录</div>
          <!-- <div class="header-splid">|</div> -->
          <div class="header-regist login-regist">注册</div>
        </div>
      </div>
    </div>

    <div class="yv-content">
      <slot />
    </div>

    <div class="yv-footer">
      <div class="yv-footer-content">
        <div class="footer-record">公司名字</div>
        <div class="footer-company">
          <div class="li" v-for="(item,index) in footList" :key="index">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.he {
  position: relative;
  width: 100%;
  min-height: 100%;

  .yv-header {
    //   padding-bottom: 240px;
    // position: relative;
    // padding-left: 100px;
    // box-sizing: border-box;
    display: flex;
    height: 85px;
    h1 {
      //  position: absolute;
      //  left:120px;
      //  top: -20px;
      //  padding-left:100px;
   margin-left: 240px;
    }
    img {
      width: 122px;
    }

    .yv-header-content {
      box-sizing: border-box;
      width: 1200px;
      margin: 0 auto;
      display: flex;
          padding-top: 18px;
      .header-img {
        padding-right: 100px;
      }

      margin: 0 auto;
      .header-tabs {
        // height: 65px;
        // line-height: 65px;
        display: flex;
        // margin: 0 auto;
        .header-tab {
          width: 100px;
          margin-right: 58px;
          font-size: 15px;
          text-align: center;
          line-height: 65px;
        }
        .header-tab:hover {
          color: red;
          border-bottom: red 1.5px solid;
          cursor: pointer;
        }
      }
      .header-login-regist {
        display: -webkit-box;
        // line-height: 65px;
            margin-top: 18px;
                padding-left: 145px;
            text-align: center;
        // padding-left: 120px;
        .header-login {
          margin-right: 40px;
          background: white;
          &:hover {
            color:red;
          }
        }
        .header-regist {
            width: 85px;
          height: 35px;
          line-height: 35px;
          border-radius: 8%;
          background: red;
          color: white;
          margin-top: -6px;
          &:hover {
          background: #999999;
          // color: red;

             
          }
        }
       
      }
    }
  }

  .yv-content {
    padding: 0 0 240px 0;
  }
  .yv-footer {
    height: 240px;
    position: absolute;
    left: 0;
    bottom: 0;
    //  position: fixed;
    width: 100%;
    background: #5A0103;
    color: darkgray;

    .yv-footer-content {
      width:1200px;
      height: 240px;
      margin: 0 auto;

      .footer-record {
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        text-align: center;
        margin-bottom: 30px;
      }
      .footer-company {
        width: 1200px;
        display: flex;
        // align-items: center;
        justify-content: center;
        // text-align: center;
        // padding-left: 80px;
        padding-bottom: 44px;
        border-bottom: white 1px solid;

        .li {
          box-sizing: border-box;
          // width: 60px;
          margin-right: 90px;
          font-size: 15px;
          &:last-child {
            margin-right: 0px;
          }
        }
      }
    }
  }
  .tab-active {
    color: red;
    border-bottom: red 1.5px solid;
    cursor: pointer;
  }
}
// .box {
//     display: flex;
//     justify-content: space-evenly;
//     // height: 65px;
//     // line-height: 65px;

//     .active {
//       color: orangered;
//       border-bottom:orangered 2px solid;
// }
// li {
//     width:140px;
//     text-align: center;
//     span {
//         font-size: 14px;
//     }
// }

// }
</style>
<script>
export default {
  data() {
    return {
      tabList: [
        { id: "Home", text: "首页" },

        { id: "First", text: "杠杆交易" },
        { id: "Second", text: "行情图表" },
        { id: "Third", text: "合约交易" },
        { id: "Fourth", text: "币币交易" }
      ],
      imgSrc: require("../assets/BLITZ BOOK 8.png"),
      nowIndex: false,
      activeIndex: false,
      footList: [
        { id: "5", text: "关于我们" },
        { id: "6", text: "产品介绍" },
        { id: "7", text: "联系我们" },
        { id: "8", text: "免责声明" },
        { id: "9", text: "服务条款" }
      ]
    };
  },
  mounted() {
    const tabIndex = window.localStorage.getItem("tab") || false;
    this.activeIndex = tabIndex;
  },
  methods: {
    // activeTab(index) {
    //   console.log("jj");
    //   this.nowIndex = index;
    // },
    // moveActive(index) {
    //    this.activeIndex =!index
    // },
    changeTab(index) {
      this.activeIndex = index;
      window.localStorage.setItem("tab", this.activeIndex)
      console.log("niaho ");
    }
  }
};
</script>