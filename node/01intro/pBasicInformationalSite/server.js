const express = require("express")
const app = express()
app.use(logger)

// app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('here')
    // res.sendStatus(500).json({ message: "Error" })
    // res.send('hi')
    // res.json({ message: "Error" })
    res.render( 'index', { text: "hello" } )
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(8081)