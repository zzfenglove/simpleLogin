const router=require('koa-router')()
const userController=require('../controllers/userController')

router.post('/login',userController.login)
router.post('/register',userController.register)
router.get('/getUser',userController.getUser)

module.exports=router