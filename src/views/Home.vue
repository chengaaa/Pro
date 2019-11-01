<template>
  <div class="Home">
    <div class="Home-1">
      <img src="../assets/jk.jpg" alt />
    </div>
    <div class="Home-2">
      <div>
        <img src="../assets/dt.jpg" alt />
      </div>
    </div>
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
      </div>
    </div>
    <div class="Home-4">
      <div class="Home-content">
      <div class="left">
        <div>空</div>
      </div>
      <div class="right">
        <ul>
          <li><i class="iconanzhuo"></i><a href="">Android 版下载</a></li>
          <li><a href="">iOS 版下载</a></li>
          <li><a href="">MAC 版下载</a></li>
          <li><a href="">WIN 版下载</a></li>
         </ul>

      </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Home {
  img{
    width: 100%;
  }
 
  
  .Home-4 {
    //  height: 400px;
    .Home-content   {
      // width: 930px;
      background:brown;

     margin: 0 auto;
   
    display: flex;
    .right {
      width: 400px;
      background:green;
      height: 600px;
      ul {
         display: flex;
         height: 600px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
         margin-bottom:70px;
         padding-left: 35px;
     
      a {
        color: blue;
        font-size: 25px;
       text-decoration:none;
        &:hover {
          color: white;
        }
         }
      }
      }
    }
    .left {
      flex: 1;
      margin-right: 100px;
      background:yellow;
      height: 600px;
    }
    }
   
  }
}
</style>
<script>
export default {
  data() {
    return {
      blackList: [
        {
          title: "权威数据",
          text: "数百亿条数据 / 覆盖金融市场",
          img: "../assets/people.png"
        },
        {
          title: "一手资讯",
          text: "海量资讯来源 / 资讯快人一步",
          img: "../assets/doll.png"
        },
        {
          title: "专业工具",
          text: "强大安全工具 / 解决金融问题",
          img: "../assets/lock.png"
        },
        {
          title: "贴心服务",
          text: "贴心人工服务 / 专业人工解答",
          img: "../assets/money.png"
        }
      ]
    };
  },
  methods: {}
};
</script>
