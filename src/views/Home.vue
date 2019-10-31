<template>
  <div class="Home">
    <div class="">
      <img src="../assets/jk.jpg" alt="" />
    </div>
    <div class="padd">
      <img src="../assets/dt.jpg" alt="" />
    </div>

    <div>
      <ul>
        <li v-for="(item,index) in blackList" :key="index"><img :src="item.img" alt=""><p>{{item.title}}</p><span>{{item.text}}</span></li>
      </ul>
    </div>
    </div>
    </template>
<style lang="scss" scoped>
.Home {
  .padd {
    padding-left: 100px;
  }
}

</style>
<script>
export default {
  data() {
    return {
      blackList: [
        {title:"权威数据", text: "数百亿条数据 / 覆盖金融市场",img:"../assets/people.png"},
        {title:"一手资讯", text: "海量资讯来源 / 资讯快人一步",img:"../assets/doll.png"},
        {title:"专业工具", text: "强大安全工具 / 解决金融问题",img:"../assets/lock.png"},
        {title:"贴心服务", text: "贴心人工服务 / 专业人工解答",img:"../assets/money.png"},
      ]
    }
  }
    
}
</script>
