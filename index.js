const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))
app.use('/api/auth', require('./routes/auth.route'))
app.use('/api/todo', require('./routes/todo.route'))
app.use('/api/sell', require('./routes/sell.route'))
app.use('/api/review', require('./routes/review.route'))


async function start(){ 
    try {
        mongoose.connect('mongodb+srv://root:root@cluster0.ybqp1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        app.listen(PORT, ()=> {
            console.log(`Server started on port ${PORT}`)
        })

    } catch (error) {
        console.log(error)
    }
}

start()