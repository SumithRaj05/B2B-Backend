const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { UserRoutes, 
    ProductRoutes, 
    OrderRoutes,
    PaymentRoutes
} = require('./Modules/MainRouter');

const app = express()
const port = 3000 || process.env.PORT;

// Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(`${__dirname}/Modules/Views`));
app.use(express.static(`${__dirname}/ProductFiles`));

// for testing purpose

// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/Modules/Views/test.html`)
// })

app.use('/api/users', UserRoutes)
app.use('/api/products', ProductRoutes)
app.use('/api/orders', OrderRoutes)
app.use('/api/payment', PaymentRoutes)

// start listening
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`Server listening on http://127.0.0.1:${port}`)
    }
})
