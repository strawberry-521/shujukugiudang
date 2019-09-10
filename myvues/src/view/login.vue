<template>
  <div class="login">
      <p><input type="text" placeholder="手机号" v-model="phone"/></p>
       <p><input type="password" placeholder="密码" v-model="pwd"/></p>
       <button @click="clickFn">登录</button>
  </div>
</template>

<script>

export default {
    data(){
        return {
            phone:"",
            pwd:""
        }
    },
methods: {
    clickFn(){
        this.axios.post("http://localhost:3000/api/login",{phone:this.phone,password:this.pwd}).then(({data})=>{
            if(data.code==1){
                localStorage.setItem("token",data.token)//本地存储token值
               this.$router.push({path:"/Home"})//跳转home页面
            }
        })
    }
},
}

</script>

<style scoped>
    .login{
        margin:0 auto;
        width:80%;
        height:300px;
        margin-top:20px;
    }
    .login p{
        height:50px;
        line-height: 50px;
        border-bottom:1px solid #ccc;
    }
    .login p input{
        font-size:20px;
        outline:none;
        border:none;
    }
    .login button{
        margin-top:15px;
        width:100%;
        height:50px;
        text-align: center;
        line-height: 50px;
        background:#999;
        border-radius: 25px;
        border:none;
        color:#fff;
        font-size: 20px;
    }
</style>