const {Router} = require('express')
const router = Router()
const Review = require('../models/Review')

router.post('/add', async (req,res) => {
    try {   
        const {name,text} = req.body

        const review = await new Review({
            name,
            text
        })

        await review.save()

        res.json(review)

    } catch (error) {
        console.log(error)
    }
})

router.get('/', async(req,res)=>{
    try {
        const {userId} = req.query

        const review = await Review.find({})

        res.json(review)
        
    } catch (error) {
        console.log(error)
    }
})


module.exports = router