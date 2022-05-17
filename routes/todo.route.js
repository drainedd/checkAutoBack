const {Router} = require('express')
const router = Router()
const Todo = require('../models/Todo')

router.post('/add', async (req,res) => {
    try {   
        const {text,text2,about, contact} = req.body

        const todo = await new Todo({
            text,
            text2,
            about,
            contact
        })

        await todo.save()

        res.json(todo)

    } catch (error) {
        console.log(error)
    }
})

router.get('/', async(req,res)=>{
    try {
        const {userId} = req.query

        const todo = await Todo.find({})

        res.json(todo)
        
    } catch (error) {
        console.log(error)
    }
})


module.exports = router