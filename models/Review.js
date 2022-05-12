const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    
    name: {type:String},
    text: {type:String},
   
    
})

module.exports = model('Review', schema)