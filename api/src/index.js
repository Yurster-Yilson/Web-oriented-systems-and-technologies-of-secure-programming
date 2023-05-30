const express = require("express")
const app = express()

app.get("/test", (req, res) => {
    res.send("Server is working correctly")
})

app.listen(8080, () => {
    console.log("API-service is working")
})