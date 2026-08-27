
const express = require('express')

const app = express()

const PORT = 8000

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const userRoute = require('./routes/user.route')
const eventRoute = require('./routes/event.route')
const ticketRoute = require('./routes/ticket.route')

app.use('/user', userRoute)
app.use('/event', eventRoute)
app.use('/ticket', ticketRoute)

app.use(express.static(__dirname))

const auth = require('./routes/auth.route')
app.use('/auth', auth)

app.listen(PORT, () => {
    console.log(`Server of Ticket Sales runs on port ${PORT}`)
})
