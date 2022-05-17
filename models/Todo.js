const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    
    text: {type:String},
    text2: {type:String},
    about: {type:String},
    contact: {type: String}
    
})

module.exports = model('Todo', schema)