var userList=[{
			name:"123123",
			password:'123456'
		},{
			name:'456456',
			password:'456456'
		}];

const findUser=function(name,password){
	let item=userList.find(function(item){return item.name==name&&item.password==password});
	return item;
}

const register = function(name,password){
	let success=false
	var newUser={
		name:name,
		password:password
	}

	try{
		userList.push(newUser);
		success=true;
	}catch(err){
		console.log(err);
		success=false;
	}
	
	return success;
}	

const getUsers=function(){
	return userList;
}

const userExist=function(name){
	let item=userList.find(function(item){return item.name==name});
	return item;
}

module.exports={
	findUser,
	register,
	getUsers,
	userExist
}