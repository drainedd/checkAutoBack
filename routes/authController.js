const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const {secret} = require('../config')

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn:"1s"} )
}


class authController {

    async registration(req, res){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({ errors, message:'Некорректные данные при регистрации'})
            }
                const { email, password } = req.body
        
                const candidate = await User.findOne({email})
        
                if (candidate){
                    return res.status(400).json({message: 'Такого Email нет в базе'})
                }
                const hashedPassword = await bcrypt.hashSync(password, 7)

                const userRole = await Role.findOne({value:'USER'})
                const user = new User({
                    email, password: hashedPassword, roles:[userRole.value]
                    
                })
                await user.save()

                res.status(201).json({message: 'Пользователь создан'})

        } 
        
        catch (error) {
            console.log(error)
            res.status(400).json({message:'reg err'})
        }
    }
    async login(req, res){
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user){
                return res.status(400).json({message:'Пользователь не найден'})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({message:'Введен неверный пароль'})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        } catch (error) {
            console.log(error)
            res.status(400).json({message:'log err'})
        }
    }
    

    async getUsers(req, res){
        try {
            const users = await User.find()
            res.json(users)
        } catch (error) {
            
        }
    }
}


module.exports = new authController()