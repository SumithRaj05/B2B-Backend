const express = require('express')
const bodyParser = require('body-parser')

const { UserRoutes, ProductRoutes, OrderRoutes } = require('./Modules/MainRouter');

const app = express()
const port = 3000 || process.env.PORT;

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(`${__dirname}/Modules/Views`));
app.use(express.static(`${__dirname}/ProductsFiles`));

// for testing purpose

// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/Modules/Views/test.html`)
// })

app.use('/user', UserRoutes)
app.use('/products', ProductRoutes)
app.use('/orders', OrderRoutes)

// start listening
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server listening on http://127.0.0.1:${port}`)
    }
})