// YOUR CODE HERE
const express = require('express')
const morgan = require('morgan')
const cors = require("cors")
const app = express();
const storeRouter = require("./routes/store.js")

const errors = require("./utils/errors")

const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json()) //allows us to send objects
app.use(morgan('tiny')) //used for logging

app.use("/store", storeRouter);

app.get('/', (req, res) => {
    res.send({"ping": "pong"})
})


app.use((req, res, next) => {
    return next(new errors.NotFoundError())
})

app.use((error, req, res, next) => {
const status = error.status || 500
const message = error.message

return res.status(status).json({
    error: { message, status },
})
})

module.exports = app;