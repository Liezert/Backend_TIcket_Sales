const express = require(`express`)
const app = express()

app.use(express.json())

const userController = require(`../controller/user.controller`)
const { midOne } = require("../middlewares/simple-middleware")
const { validateUser } = require("../middlewares/user-validation")
const { authorize } = require('../controller/auth.controller')
const {IsUser, IsAdmin} = require('../middlewares/role-validation')

app.post("/register", validateUser, userController.register)
app.put("/reset/:id", userController.resetPwd)

app.get("/", authorize, IsAdmin, userController.getAllUser)
app.get("/:key", authorize, IsAdmin, userController.findUser)
app.post("/", authorize, IsAdmin, validateUser, userController.addUser)
app.put("/:id", authorize, IsUser, validateUser, userController.updateUser)
app.delete("/:id", authorize, IsAdmin, userController.deleteUser)

module.exports = app
