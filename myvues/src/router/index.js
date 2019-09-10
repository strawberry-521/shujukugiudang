import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import("../view/home.vue")
const Login=()=>import("../view/login.vue")
const Details=()=>import("../view/details.vue")
const Form=()=>import("../view/form.vue")
const Time=()=>import("../view/util/addban.vue")
const Test=()=>import("../view/util/testday.vue")
const Detail=()=>import("../view/util/deltail.vue")
Vue.use(Router)

var router=new Router({
  mode:'history',
  routes: [{
    path:"/",
    redirect:"Home"
  },{
    path:"/home",
    component:Home
  },{
    path:"/login",
    component:Login
  },{
    path:"/details",
    component:Details
  },{
    path:"/from",
    component:Form,
  },{
    path:"/time",
    component:Time
  },{
    path:"/test",
    component:Test
  },{
    path:"/deltail",
    component:Detail
  },{
    path:"*",
    component:Home
  }
  ]
})
router.beforeEach((to,from,next)=>{
 var token=localStorage.getItem("token");
 if(token){
   if(to.path=="/login"){
    next(from.path)
   }else{
     next()
   }
   
 }else{
   if(to.path=="/login"){
     next()
   }else{
     next("/login")
   }
 }
 
})
export default router