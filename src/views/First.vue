<template>
  <div class="Second">
    <div class="pig">
      <img src="../assets/shu.jpg" alt />
    </div>
    <div class="Second-A">
      <div>
        <h3>互联网大数据</h3>
        <h4>Bulk Deals金融终端</h4>
      </div>
      <div>
        <P>Bulk Deals金融终端是一款面向各类金融投资机构、研究机构和学术机构等不同类型机构用户的互联网大数据金融超级终端。数据涵盖股票、基金、债券、指数、商品、外汇和宏观行业等多项品种数据，7×24小时实时推送各类公告、各类资讯数据和研究报告。</P>
      </div>
      <div>
        <P>Bulk Deals金融终端的数据来源正规、完整齐全，所有基础数据经过大量人工的清洗、录入、校验、修正和统计加工。数据层次分明，包含行情报价，多维数据、专题统计、新闻资讯、研究报告、常用金融模型与应用工具等，功能集数据统计、数据提取和数据分析为一体，为机构投资者提供了精细化和专业化的深度研究综合解决方案。</P>
      </div>
    </div>
    <div class="Second-B">
      <div class="Second-B-1" v-for="(item,index) in titleList" :key="index">
        <div class="Second-B-1a">
        <i class='iconfont iconfont-1'>{{item.icon}}</i>
           
          <div>{{item.title}}</div>
          <p>{{item.text}}</p>
          <p>{{item.cont}}</p>
        </div>
        <div class="Second-B-2">
          <img :src="item.img" alt />
        </div>
        
          
       
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Second {
  .iconfont-1 {

      font-size: 30px;
      position: relative;
    top: 34px;
    // left: 5px;
    color: red;
     }
  h3,h4 {
    font-weight: 500;
    text-align: center;
  }
  
  .pig {
  width: 100%;
  margin-bottom:65px;
  img {
    width: 100%;
  }
}
.Second-A {
   width: 1200px;
  margin: 0 auto;
  
  h3 {
      font-size: 33px;
  }
  h4{
      font-size: 36px;
      margin-bottom:36px;
      
  }
  p {
    // width: 980px;
    font-size: 15px;
    margin-bottom: 28px;
  }
}

.Second-B {
  width: 1200px;
  // height: 680px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 90px;
  .Second-B-1 {
       margin-bottom: 50px;
        height: 145px;
        display: flex;
        // justify-content: space-evenly;
        justify-content: space-between;
        

 
  .Second-B-1a {
        // float: left;
        height: 145px;

      div {
        height: 32px;
        color:orangered;
        font-size: 24px;
        padding-left: 45px;
        margin-bottom: 23px;
        // background: url("../assets/jingl.png") no-repeat -30px -24px ;
        // float: left;
       



      }
      p {
        font-size: 13px;
        width: 673px;
        line-height: 25px;
        // float: left;

      }
     
  }
  .Second-B-2 {
        width: 236px;
        height: 132px;
        // float: right;

    

  }
 
  }
  
}

}

</style>
<script>
export default {
  data() {
    return {
      titleList: [
        {
          title: "股票",
          text:
            "沪深、美股、港股的行情报价；深度资料、数据浏览器、财务纵比、条件选股等；经济业务大全；",
          cont:
            "专题统计报表：市场特色资讯专题统计报表，包括市场概况、公司研究、机构研究、盈利预测等；财务预测与估值系统、EXCEL插件、估值计算器；产权交易等专项业务应用。",
          img: require("../assets/ui.png"),
          icon:'\ue620'
        },
        {
          title: "债券",
          text:
            "行情报价；综合分析、到期收益分析等计算辅助工具；深度资料、数据浏览器、期限结构、债券筛选等；",
          cont: "专题统计报表：市场概况、信用债研究、可转债研究等。",
          img: require("../assets/ud.png"),
          icon:'\ue626'

        },
        {
          title: "基金",
          text: "业绩排行；基金深度资料、基金筛选、基金比较等；",
          cont: "专题统计报表：包括市场概况、业绩评价、资产配置等；分级基金",
          img: require("../assets/up.png"),
          icon:'\ue61d'
          
        },
        {
          title: "理财",
          text:
            "集合理财、阳光私募、银行理财、信托、保险的全方位数据展示，包括新闻公告研报，日历、深度资料、综合统计、业绩评价、产品筛选比较等，提供各类理财部门必备的资讯、数据和工具。",
          img: require("../assets/uw.png"),
          icon:'\ue629'

         
        }
      ]
    };
  }
};
</script>
