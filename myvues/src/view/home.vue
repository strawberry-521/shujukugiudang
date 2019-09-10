<template>
  <div class="home">
      <Header/>
      <div class="nav">
      <div  :class="{action:status_actives[0]}" @click="changestyleFn(0)">
          <span class="iconfont">&#xe65e;</span>
          <p>待处理</p>
      </div>
      <div  :class="{action:status_actives[1]}" @click="changestyleFn(1)">
          <span class="iconfont">&#xe7ee;</span>
          <p>已发起</p>
      </div>
      <div  :class="{action:status_actives[2]}" @click="changestyleFn(2)">
          <span class="iconfont">&#xe827;</span>
          <p>已处理</p>
      </div>
  </div>
  <div class="wrapper">
    <span  @click="activeFn(0)" :class="{active:active_acrion[0]}">休假</span> <span  @click="activeFn(1)" :class="{active:active_acrion[1]}">加班</span>
  </div>
  <div class="list">
    <Lists :option="datas"/>
     <p class="sends" @click="showFn">+发起任务</p>
     <!-- {{datas}} -->
  </div>
    <div class="marsk" ref="show">
      <div class="box">
        <dl>
        <dt class="iconfont" @click="addclickFn">&#xe71b;</dt>
        <dd>加班</dd>
      </dl>
      <dl>
        <dt class="iconfont"  @click="testFn">&#xe78e;</dt>
        <dd>休假</dd>
      </dl>
      </div>
      
    </div>
  </div>
</template>

<script>
import Header from "../components/myheader"
import Lists from "./util/lists.vue"
import Nav from "../view/util/nav"

export default {
components:{          
  Header,Nav,Lists
},
data(){
  return {
    datas:[],
    index:0,
    current:0,
    status_actives:[true,false,false],
    type:"overtime",
    active_acrion:[true,false],
    showe:false
  }
},
created(){
this.axios.defaults.headers.common["token"]=localStorage.getItem("token")
    this.axios.get("http://localhost:3000/api/task/list",
    {params:{status:this.index,type:this.type}}).then(({data})=>{
      this.datas=data
    })
},
methods:{
  testFn(){
    this.showe=false
    this.$refs.show.style.display="none"
     this.$router.push({path:"/test"})
  },
  addclickFn(){
    this.showe=false
    this.$refs.show.style.display="none"
    this.$router.push({path:"/time"})
  },
  showFn(){
    this.showe=true
      this.$refs.show.style.display="block"
      
  },

  tokenFn(){
    this.axios.defaults.headers.common["token"]=localStorage.getItem("token")
    this.axios.get("http://localhost:3000/api/task/list",
    {params:{status:this.index,type:this.type}}).then(({data})=>{
      this.datas=data
    })
  },
  changestyleFn(index){
    for(let i=0;i<this.status_actives.length;i++){
      if(i==index){
        this.$set(this.status_actives,i,true)
      }else{
        this.$set(this.status_actives,i,false)
      }
      
    }
    this.index=index
    this.tokenFn()
  },
  activeFn(count){
      
    
         if( count==0){
           this.type="overtime"
        }else{
          this.type="vacation"
         }
    for(let i=0;i<this.active_acrion.length;i++){
      if(i==count){
        this.$set(this.active_acrion,i,true)
        
      }else{
         this.$set(this.active_acrion,i,false)
      }
    }
    this.tokenFn()
  }
}
}
</script>

<style scoped>

.home{
  width:100%;
  height:100%;
  background:#ccc;
  position:relative;
}
.nav{
    width:100%;
    height:100px;
    background:#fff;
    display:flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    font-size: 20px;
    color:#999;
}
.nav span{
    font-size:30px;
}
.nav .action{
    color:green;
}

.wrapper{
  width:100%;
  height:80px;
  line-height: 100px;
  text-align: center;
}
.wrapper .active{
  background:green;
}
.wrapper span{
   background:#999;
  padding:5px 15px;
 
}
.wrapper .xiu{
  border-radius: 15px 0 0 15px;
}
.wrapper .adds{
  border-radius: 0px 15px 15px 0px;
}
.marsk{
  width:100%;
  height: 100%;
  position:absolute;
  top:0;
  left:0;
  background:rgba(0,0,0,0.3);
  display:none;
}
.marsk .box{
  display:flex;
  align-items: center;
  width:100%;
  height:100px;
  position: absolute;
  bottom:0;
  left:0;
  background:#fff;
  text-align: center;
}
.marsk .box dl{
  flex:1;
  color:#999;
}
.list .sends{
 width:100px;
  height:40px;
  background:green;
  color:#fff;
  text-align: center;
  line-height: 40px;
  border-radius: 20px;
  position: fixed;
  right:20px;
  bottom:20px;
}
</style>