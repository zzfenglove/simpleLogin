<template>
	<div class="container"style="margin-top: 200px;" id="login">
       <div class="col-sm-offset-4col-sm-4 col-sm-offset-4 form form-horizontal" method="post" id="login_form">
           <h3 class="text-center">用户登录</h3>
           <div class="form-group">
              <label for="username"class="col-sm-2 control-label">账&nbsp;号</label>
              <div class="col-sm-10">
                 <input type="text" class="form-control" id="username" name="username" placeholder="请输入用户名" v-model="model.username">
             </div>
           </div>
           <div class="form-group">
             <label for="password"class="col-sm-2 control-label">密&nbsp;码</label>
             <div class="col-sm-10">
                 <input type="password" class="form-control"id="password" name="password" placeholder="请输入密码" v-model="model.password">
             </div>
           </div>
           <button class="btn btn-success center-block" @click="login">登录</button>
           <button class="btn btn-success center-block" @click="register">注册账号</button>
         </div>
   </div>
</template>
<script>
export default{
  	name:'login',
  	data(){
  		return {
  			model:{
  				username:'',
  				password:''
  			}
  		}
  	},
  	methods:{
  		login:function(){
  			if(!(this.model.username&&this.model.password)){
  				alert('请填写');
  				return false;
  			}else{
  				this.$http.post('http://localhost:5000/login',{"name":this.model.username,"password":this.model.password}).then(data=>{
  					if(data.data.success){
  						window.localStorage.setItem("usertoken",this.model.username);
  						this.$router.push("/list");
  					}else{
  						alert(data.data.msg)
  						return false;
  					}
  				});
  			}
  		},
  		register:function(){
  			if(!(this.model.username&&this.model.password)){
  				alert('请填写');
  				return false;
  			}else{
  				this.$http.post('http://localhost:5000/register',{"name":this.model.username,"password":this.model.password}).then(data=>{
  						if(data.data.success){
  							alert('注册成功');
  						}else{
  							alert('注册失败')
  						}
  				});
  			}
  		}
  	}
}
</script>
<style>
</style>