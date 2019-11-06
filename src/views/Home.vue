<template>
  <div class="Home">
    <div class="background">
      <div class="Home-1">
        <img src="../assets/jk.jpg" alt />
      </div>
      <div class="Home-2">
        <div v-for="(item,index) in eosList" :key="index" class="Home-2-A">
          <!-- <img :src="item.img" alt=""> -->
          <div class="flex">
            <div class="Home-2-b">
              <!-- <i class="iconfont iconfont-1">{{item.icon}}</i> -->
              <!-- <span>EOS</span> -->
              <img :src="item.img" alt />
            </div>
            <div class="Home-2-c">
              <span>指数</span>
            </div>
          </div>

          <div class="Home-2-d">
            <span>{{item.usd}}</span>
            <span>≈</span>
            <span>{{((item.usd)*(item.rate)).toFixed(2)}}CNY</span>
          </div>
          <div class="Home-2-e">
            <p>{{item.aindex}}%</p>
          </div>
        </div>
      </div>
      <div class="Home-3">
        <div class="Home-content">
          <transition name="fade">
            <div class="soll" v-if="isShow1">
              <ul>
                <li v-for="(item,index) in blackList" :key="index">
                  <img :src="item.img" alt />

                  <p>{{item.title}}</p>
                  <span>{{item.text}}</span>
                </li>
              </ul>
            </div>
          </transition>
          <transition name="fade">
            <div class="soll-2" v-if="isShow2">
              <div class="soll-2-A">
                <!-- <p class="soll-2-A-a">
                  <span>期货交易全球站</span>
                  <span>近24小时成交量267894856美元</span>
                </p>-->
                <p class="p">为全球80多个国家和地区提供，安全快捷的数字资产和黄金外汇交易服务</p>
              </div>
              <div class="soll-2-BBB">
                <div>
                  <div class="soll-2-B">
                    <h3>一手资讯</h3>
                    <p>24小时滚动新闻，最好的投资理财信息</p>
                  </div>
                  <div class="soll-2-B" id="botto">
                    <h3>贵金属交易</h3>
                    <p>现货黄金白银交易透明 随时随地轻松交易</p>
                  </div>
                </div>
                <div class="left-right">
                  <img src="../assets/kk.jpg" alt />
                </div>
                <div>
                  <div class="soll-2-B">
                    <h3>数字货币</h3>
                    <p>支持多种币币交易，杠杆，期货，提高收益</p>
                  </div>
                  <div class="soll-2-B" id="botto">
                    <h3>外汇市场</h3>
                    <p>可开仓多国货币 玩法多 选择多 盈利快</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="Home-4" v-if="isShow3">
        <div class="Home-content">
          <div class="Home-4-A">
            <div class="top">
              <h3>多平台终端选择</h3>
              <p>iOS、Android、Mac、Windows 多个平台支持全业务功能</p>
            </div>
            <div class="fot">
              <div class="fot-left">
                <span>
                  <i class="iconfont iconanzhuo4"></i>

                  <a href>Android 版下载</a>
                </span>
                <span>
                  <i class="iconfont iconapple"></i>

                  <a href>iOS 版下载</a>
                </span>
              </div>
              <div class="fot-right">
                <span>
                  <i class="iconfont iconapple"></i>

                  <a href>MAC 版下载</a>
                </span>
                <span>
                  <i class="iconfont iconwin"></i>

                  <a href>WIN 版下载</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.Home {
  .iconfont {
    font-size: 30px;
  }
  .Home .iconfont {
    font-size: 30px;
  }
  .background {
    background: #f7f7f7;
  }
  h3 {
    font-weight: 500;
  }
  img {
    width: 100%;
  }
  .Home-2 {
    margin-bottom: 100px;
    .Home-2-A {
      // width:50px ;
      // height: 50px;
      box-shadow: 5px 5px 5px #888888;
      padding-top: 12px;
      box-sizing: border-box;

      width: 235px;
      height: 160px;
      // &:hover {
      //    box-shadow: 5px 5px 5px #888888;
      // }

      .flex {
        display: flex;
        //  justify-content: center;
        align-items: center;

        .Home-2-b {
          // display: flex;
          // flex-direction:column;
          width: 100px;
          span {
            font-size: 16px;
          }
        }
      }
      .Home-2-c {
        span {
          font-size: 16px;
        }
      }
      .Home-2-d {
        //  margin:0 auto;
        //  text-align: center;
        span {
          color: #cc3333;
          font-size: 14px;
          line-height: 38px;
          &:first-child {
            font-size: 20px;
          }
        }
      }
      .Home-2-e {
        width: 83px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        background: #cc3333;
        color: #f7f7f7;
        border-radius: 5%;
        //  margin: 0 auto;
        font-size: 15px;
      }
    }

    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }

  .Home-3 {
    margin: 0 auto;
    .Home-content {
      width: 1200px;
      margin: 0 auto;

      .soll {
        margin-bottom: 100px;

        ul {
          justify-content: center;
          align-items: center;
          height: 320px;

          display: flex;
          li {
            width: 200px;
            margin-right: 120px;
            text-align: center;
            &:last-child {
              margin-right: 0px;
            }

            img {
              width: 100%;
            }
            p {
              height: 100px;
              line-height: 100px;
              font-size: 32px;
            }
            span {
              font-size: 14px;
              color: #999999;
            }
          }
        }
      }
      .soll-2 {
        .soll-2-A {
          margin-bottom: 64px;
          .soll-2-A-a {
            // width: 840px;
            text-align: center;

            span {
              height: 150px;
              line-height: 150px;
              font-size: 37px;
              margin-right: 80px;
              &:last-child {
                margin-right: 0px;
              }
              // text-align: center;
            }
          }
          p {
            font-size: 28px;
            text-align: center;
          }
        }
        .soll-2-BBB {
          width: 1200px;
          display: flex;
          justify-content: center;
          // #botto {
          //   margin-bottom: 0px;
          // }

          .left-right {
            padding: 0px 180px 0 180px;
          }

          .soll-2-B {
            width: 200px;
            margin-bottom: 112px;

            h3 {
              font-size: 28px;
              line-height: 50px;
              text-align: center;
            }
            p {
              font-size: 16px;
              text-align: center;
              line-height: 25px;
            }
          }
        }
      }
    }
  }

  .Home-4 {
    //  height: 400px;
    background: #990000;
    .Home-content {
      width: 1200px;
      // background: brown;

      margin: 0 auto;
      .Home-4-A {
        height: 400px;
        text-align: center;
        .top {
          padding-top: 100px;
          margin-bottom: 80px;
          h3 {
            color: white;
            font-size: 38px;
          }
          p {
            color: #738096;
            //  height: 26px;
            line-height: 32px;
          }
        }
        .fot {
          display: flex;
          justify-content: center;
          .fot-left,
          .fot-right {
            display: flex;
            flex-direction: column;
            width: 230px;
            height: 80px;
            span {
              line-height: 35px;
              a {
                text-decoration: none;
                color: white;
                font-size: 14px;
                padding-left: 10px;
              }
            }
          }

          .fot-left {
            border-right: 2px solid white;
            padding-right: 100px;
             span:last-child {
               padding-right:30px;
               margin-top:15px;
             }
            .iconanzhuo4,
            .iconapple {
              color: white;
              font-size: 22px;
            }
          }
          .fot-right {
            padding-left: 100px;
             span:last-child {
               margin-top:15px;
             }
            .iconapple,
            .iconwin {
              color: white;
              font-size: 22px;
            }
          }
        }
      }
    }
  }
}
.left {
  flex: 1;
  margin-right: 50px;
  // background: yellow;
  height: 600px;
}

.fade-enter-active {
  transition: all 0.8s linear 0s;
}
.fade-enter {
  opacity: 0;
}
</style>
<script>
import "../assets/icon/iconfont.css";

export default {
  data() {
    return {
      blackList: [
        {
          title: "权威数据",
          text: "数百亿条数据 / 覆盖金融市场",
          img: require("../assets/people.png")
        },
        {
          title: "一手资讯",
          text: "海量资讯来源 / 资讯快人一步",
          img: require("../assets/doll.png")
        },
        {
          title: "专业工具",
          text: "强大安全工具 / 解决金融问题",
          img: require("../assets/lock.png")
        },
        {
          title: "贴心服务",
          text: "贴心人工服务 / 专业人工解答",
          img: require("../assets/money.png")
        }
      ],
      eosList: [
        {
          usd: 183.86,
          rate: 6.96,
          //指数
          aindex: 5.64,

          img: require("../assets/imgapp.jpg")
          //  img: require("../assets/eos.jpg"),
        }
      ],

      timer: null, // 下拉延时
      timer1: null, // 刷新置顶延时
      isShow1: false,
      isShow2: false,
      isShow3: false,
      showNum: 1
    };
  },
  computed: {
    //  usd:{
    //    get: function() {
    //      return (this.cny/CNY_USD).toFixed(2)
    //    }
    //  },
  },

  created() {
    // 刷新置顶
    this.toTop(() => {
      window.addEventListener("scroll", this.scrollHandle);
    });
  },
  methods: {
    /**
     * @params {Function} 执行置顶之后再监听，直接监听会触发isShow = true
     */
    toTop(callback) {
      clearTimeout(this.timer1);
      this.timer1 = setTimeout(() => {
        window.scrollTo(0, 0); // 两种置顶都可以
        callback(); // 执行回调
        clearTimeout(this.timer1);
        this.timer1 = null;
      }, 300);
    },

    // 懒加载
    lazyLoad() {
      this[`isShow${this.showNum}`] = true;
      this.showNum++;
      if (this.showNum > 3) this.showNum = 3;
    },

    // 判断滚动条件
    scrollEvent() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let pageHeight = window.innerHeight;
      let wholeHeight = document.body.scrollHeight;
      const emitHeight = wholeHeight - pageHeight - scrollTop;
      return emitHeight < 200;
    },

    // 被监听的滚动事件
    scrollHandle() {
      if (!this.scrollEvent()) return;
      this.debounce(this.lazyLoad);
    },

    // 防抖函数
    debounce(fn, delay = 50) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        fn();
        clearTimeout(this.timer);
        this.timer = null;
      }, delay);
    }
  },
  beforeDestroy() {
    // 销毁组件前移除事件
    window.removeEventListener("scroll", this.scrollHandle);
  }
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.scrollHandle);
  // }
};
</script>
