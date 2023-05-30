const express = require("express")
const app = express()
const {port, host} = require("./configuration")
const {connectDB} = require("./utils/db")
const {User} = require("./models/user")

connectDB()
    .on('error', console.error.bind(console, 'connection error:'))
    .once("open", startServer)

function startServer() {
    app.listen(port, () => {
        console.log(`API-service is working on ${host}:${port}`)
    })
    app.get("/", (req, res) => {
        res.send(`Server is working correctly`)
    })
    app.get('/users', async (req, res) => {
        try {
            const user = new User({firstName: "Yurii", lastName: "Popad"})
            await user.save()
            const users = await User.find()
            res.json({users})
        } catch (err) {
            res.send({err})
        }
    })
}
