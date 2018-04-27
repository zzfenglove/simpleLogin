const koa=require('koa')
const bodyparser=require('koa-bodyparser')
const logger=require('koa-logger')
const koaRouter=require('koa-router')()
const app=new koa()
const router=require('./server/routes/user')
const cors = require('koa-cors');

app.use(bodyparser())
app.use(logger())
app.use(cors())

app.on('error',function(err,ctx){
	console.log(err);
})

koaRouter.use(router.routes());

app.use(koaRouter.routes())
app.use(koaRouter.allowedMethods())


app.listen(5000, () => {
  console.log('Koa is listening on port 5000');
});

module.exports = koa;