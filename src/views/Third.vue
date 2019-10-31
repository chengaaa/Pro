<template>
  <div class="Second">
    <div class="pig">
      <img src="../assets/heyue.jpg" alt />
    </div>

    <div class="Second-A">
      <div class="Second-A-1">交易资讯</div>
      <div class="Second-A-2" v-for="(item, index) in List" :key="index">
        <div class="da">{{item.date}}</div>
        <div>
          <p class="m">{{item.title}}</p>

          <p class="s">{{item.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Second {
  .Second-A {
    width: 930px;
    margin: 0 auto;
    margin-top: 70px;
    .Second-A-1 {
      height: 46px;
      line-height: 46px;
      // width: 105px;
      font-size: 27px;
      color: #076ce0;
    }
    .Second-A-2 {
      height: 118px;
      display: flex;
      border-bottom: #e5e5e5 1px dashed;

      .da {
        width: 88px;
        height: 77px;
        line-height: 77px;
        text-align: center;
        margin-right: 15px;
        background: #f2f2f2;
        margin-top: 18px;
        box-sizing: border-box;
      }

      .m {
        height: 56px;
        font-size: 20px;
        line-height: 56px;
      }

      .s {
        font-size: 14px;
        color: #808080;
        text-overflow: ellipsis;
        width: 730px;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      List: [
        {
          date: "2019/09",
          title: "一行一策、银监会大幅下调拨备红线",
          text:
            "3月5日，国务院总理李克强在作政府工作报告时指出，稳健的货币政策保持中性，要松紧适度。《每日经济新闻》记者注意"
        },
        {
          date: "2019/09",
          title: "MSCI将为A股带来千亿增量资金 小散该如何站上风口？",
          text:
            "3月5日，国务院总理李克强在作政府工作报告时指出，稳健的货币政策保持中性，要松紧适度。《每日经济新闻》记者注意"
        },
        {
          date: "2019/09",
          title: "金盾股份惊爆隐情 周建灿控制的企业竟涉集资诈骗",
          text:
            "3月5日，国务院总理李克强在作政府工作报告时指出，稳健的货币政策保持中性，要松紧适度。《每日经济新闻》记者注意"
        },
        {
          date: "2019/09",
          title: "美国金融系统漏洞巨大！美元或成终牺牲品？",
          text:
            "3月5日，国务院总理李克强在作政府工作报告时指出，稳健的货币政策保持中性，要松紧适度。《每日经济新闻》记者注意"
        },
        {
          date: "2019/09",
          title: "市场关注低市盈率高增长新经济概念龙头股 ",
          text:
            "3月5日，国务院总理李克强在作政府工作报告时指出，稳健的货币政策保持中性，要松紧适度。《每日经济新闻》记者注意"
        }
      ]
    };
  }
};
</script>
