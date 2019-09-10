<template>
  <div class="lists">
      <div class="wra" v-for="(item,index) in option.data" :key="index" @click="daltialFn">
          <div class="box">
              <p>{{item.applicationNumber}}</p> <span class="iconfont">&#xe65e;<span v-if="item.status==0">待处理</span><span v-else-if="item.status==1">已发起</span><span v-else>已处理</span> </span>
          </div>
           <div class="box">
              <p>申请人：{{item.nickname}}</p> <span>加班类型：<span v-if="item.type==2">假期加班</span><span v-else-if="item.type==1">双休日加班</span><span v-else>工作日加班</span>    </span>
          </div>
           <div class="box">
              <p>加班日期：{{new Date(item.startTime).toLocaleDateString()}}</p> <span>加班时数：{{((new Date(item.endTime)-new Date(item.startTime))/3600000).toFixed(2) }}</span>
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
    props:["option"],
    methods: {
        daltialFn(){
            this.$router.push({path:"/deltail"})
            console.log(123)
        }
    },
}
</script>

<style scoped>
.wra{
    background:#fff;
    margin:10px 0;
    padding:10px;
    overflow-y: auto;
}
.wra .box{
    display:flex;
    justify-content: space-between;
    padding:0 15px;
    padding:5px;
    
}
</style>