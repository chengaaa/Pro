<template>
  <div class="Home">
    <div class="background">
    <div class="Home-1">
      <img src="../assets/jk.jpg" alt />
    </div>
    <div class="Home-2">
      <div>
        <img src="../assets/dt.jpg" alt />
      </div>
    </div>
    <div id="box">
    <div class="Home-3">
      <div class="Home-content">
        <div class="soll">
          <ul>
            <li v-for="(item,index) in blackList" :key="index">
              <img :src="item.img" alt />

              <p>{{item.title}}</p>
              <span>{{item.text}}</span>
            </li>
          </ul>
        </div>
        <div class="soll-2">
          <div class="soll-2-A">
            <p class="soll-2-A-a">
              <span>期货交易全球站</span>
              <span>近24小时成交量267894856美元</span>
            </p>
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
      </div>
    </div>
    </div>
    </div>
    <div class="Home-4">
      <div class="Home-content">
        <div class="left">
          <div>空</div>
        </div>
        <div class="right">
          <ul>
            <li>
              <i class="iconanzhuo" width="30px" height="30px"></i>
              <a href>Android 版下载</a>
            </li>
            <li>
              <a href>iOS 版下载</a>
            </li>
            <li>
              <a href>MAC 版下载</a>
            </li>
            <li>
              <a href>WIN 版下载</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Home {
  .background {
    background: #F7F7F7;
  }
  h3 {
    font-weight: 500;
  }
  img {
    width: 100%;
  }
  .Home-2 {
    margin-bottom: 100px;
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
    .Home-content {
      width: 1200px;
      background: brown;

      margin: 0 auto;

      display: flex;
      .right {
        width: 400px;
        background: green;
        height: 600px;
        ul {
          display: flex;
          height: 600px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          li {
            margin-bottom: 70px;
            padding-left: 35px;

            a {
              color: blue;
              font-size: 25px;
              text-decoration: none;
              &:hover {
                color: white;
              }
            }
          }
        }
      }
      .left {
        flex: 1;
        margin-right: 50px;
        background: yellow;
        height: 600px;
      }
    }
  }
  #box {
    opacity: 0;
  }
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
      ]
    };
  },
   mounted() {
        window.addEventListener("scroll", this.scrollHandle)
  },
  methods: {
    
  scrollHandle() {
	var timer = null;

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var innerHeight = window.innerHeight;
    var offsetHeight = document.body.offsetHeight;
    if((scrollTop + innerHeight) < offsetHeight ) {
			clearTimeout(timer);

      timer = setTimeout(function() {
         $("#box").animate({"opacity": 1}, 500, function() {
					console.log("出现了");
				})

      },500)
  //  
      
    } else {
      clearTimeout(timer);
    }
   

    // console.log($('div'));
    // console.log("hh")
  }
  },
};
</script>
