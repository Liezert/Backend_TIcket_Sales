const express = require(`express`)
const app = express()

app.use(express.json())

const ticketController = require(`../controller/ticket.controller`)
const { authorize } = require('../controller/auth.controller')
const { IsUser, IsAdmin } = require('../middlewares/role-validation')

app.post("/", authorize, ticketController.addTicket)
app.get("/", authorize, ticketController.getAllTicket)
app.get("/my-tickets", authorize, IsUser, ticketController.myTickets)
app.get("/event-sales", authorize, IsAdmin, ticketController.eventSales)
app.get("/top-events", authorize, ticketController.topEvents)
app.get("/:id", authorize, ticketController.ticketByID)

module.exports = app
