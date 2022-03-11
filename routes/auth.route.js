const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/registration',
    [
        check('email','Некорректный email').isEmail(),
        check('password', 'Некорректный пароль').isLength({ min: 6 })
    ], 
    async (req,res) => {
    try {

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message:'Некорректные данные при регистрации'
            })
        }

        const { email, password } = req.body

        const isUsed = await User.findOne({email})

        if (isUsed){
           return res.status(300).json({message: 'Данный Email уже занят, попробуйте другой'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)


        const user = new User({
            email, password: hashedPassword
        })

        await user.save()

        res.status(201).json({message: 'Пользователь создан'})

    } catch (error) {
        console.log(error)
    }
})


router.post('/login',
    [
        check('email','Некорректный email').isEmail(),
        check('password', 'Некорректный пароль').exists()
    ], 
    async (req,res) => {
    try {

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message:'Некорректные данные при регистрации'
            })
        }

        const { email, password } = req.body
        
        const user = await User.findOne({email})

        if (!user){
            return res.status(400).json({message: 'Такого Email нет в базе'})
        }

        const isMach = bcrypt.compare(password, user.password)

        if(!isMach){
            return res.status(400).json({message: 'Пароли не совпадают'}) 
        }

        const jwtSecret = 'asntsr67e5687rty8ndrt6wave4er6mnserm7drt7xdrtmt8t679jj'

        const token = jwt.sign(
            {userId: User.id},
            jwtSecret,
            {expiresIn: '1sec'}
        )

        res.json({token, userId: user.id})


    } catch (error) {
        console.log(error)
    }
})

module.exports = router