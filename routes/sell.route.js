const {Router} = require('express')
const router = Router()
const Sell = require('../models/Sell')


router.post('/add' , async (req,res) => {
    try {   
        const {color,nameMark,infoAbout,gear,year,mileage,price,telephone,city} = req.body

        const sell = await new Sell({
            
            color,
            nameMark,
            infoAbout,
            gear,
            year,
            mileage,
            price,
            telephone,
            city
        })

        await sell.save()

        res.json(sell)

    } catch (error) {
        console.log(error)
    }
})

router.get('/',  async(req,res)=>{
    try {

        const sell = await Sell.find({})

        res.json(sell)
        
    } catch (error) {
        console.log(error)
    }
})

router.delete('/delete/:id', async (req, res) =>{
    try {
        const sell = await Sell.findByIdAndDelete({_id: req.params.id})
        res.json(sell)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router