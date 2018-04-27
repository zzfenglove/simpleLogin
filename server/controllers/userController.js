const user=require('../models/user.js')

class userController{
	static register(ctx){
		let { name,password } = ctx.request.body;
		
		let item=user.userExist(name);

		if(item){
			ctx.body={
				success:false,
				msg:'存在此用户！'
			}
		}else{
			let success=user.register(name,password);
			ctx.body={
				success:success
			}
		}
	}

	static login(ctx){
		let { name,password } = ctx.request.body;
		console.log(name);
		console.log(password)
		
		let item=user.findUser(name,password);
		if(item){
			ctx.body={
				success:true
			}
		}else{
			ctx.body={
				success:false,
				msg:'不存在此用户!'
			}
		}
	}

	static getUser(ctx){
		let users=user.getUsers();
		console.log(users);

		ctx.body={
			data:users
		}
	}
}

module.exports=userController