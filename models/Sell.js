const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    color: {type:String},
    nameMark: {type:String},
    infoAbout: {type:String},
    gear: {type:String},
    year: {type:String},
    mileage: {type:String},
    price: {type:String},
    telephone: {type:String},
    city: {type:String}
})

module.exports = model('Sell', schema)