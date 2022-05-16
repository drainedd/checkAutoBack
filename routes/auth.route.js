const Router = require('express')
const router = new Router()
const controller = require('./authController')
const {check} = require('express-validator')







router.post('/registration',[
        check('email', 'имя пользователя не может быть пустым').notEmpty(),
        check('password', 'Некорректный пароль').isLength({ min: 6 })
], controller.registration)

router.post('/login', controller.login)
router.get('/users', controller.getUsers)


module.exports = router