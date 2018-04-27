<template>
	<b-container class="bv-example-row">
	    <b-row>
	        <b-col>
	        	<b-navbar toggleable="md" type="dark" variant="info">
				  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
				  <b-navbar-brand href="#">Home</b-navbar-brand>
				  <b-collapse is-nav id="nav_collapse">
				    <!-- Right aligned nav items -->
				    <b-navbar-nav class="ml-auto">				      				  
				       <em>{{username}}</em>
				          &nbsp;&nbsp;  
				       <a href="#" @click="logout">退出</a> 
				    </b-navbar-nav>

				  </b-collapse>
				</b-navbar>
	        </b-col>	        
	    </b-row>
	    <b-row>
	    	<b-col>
	    		<b-list-group>
				  <b-list-group-item><router-link to="/list">用户列表</router-link></b-list-group-item>
				</b-list-group>
	    	</b-col>
	    	<b-col>
	    		<table>
	    			<thead>
	    				<tr>
		    				<td>用户名</td>
		    				<td>密码</td>
	    				</tr>
	    			</thead>
	    			<tbody>
	    				<tr v-for="item in items">
	    					<td>{{item.name}}</td>
	    					<td>{{item.password}}</td>
	    				</tr>
	    			</tbody>
	    		</table>
	    	</b-col>
	    </b-row>
	</b-container>
</template>
<script>
  export default{
  	name:'list',
  	data(){
  		return {
  			items:[],
  			username:''
  		}
  	},
  	methods:{
  		logout:function(){
  			window.localStorage.setItem('usertoken','');
  			this.$router.push('/login');
  		}
  	},
  	mounted:function(){
  		this.username=window.localStorage.getItem('usertoken');
  		console.log(this.username);
  		this.$http.get('http://localhost:5000/getUser').then(data=>{
  			this.items=data.data.data;
  		});
  	}
  }
</script>
<style>
</style>


<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">NavBar</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>