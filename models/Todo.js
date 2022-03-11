const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    
    text: {type:String},
    text2: {type:String},
    completed: false,
    important: false
})

module.exports = model('Todo', schema)