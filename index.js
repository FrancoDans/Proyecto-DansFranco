const express = require("express")
const app = express()
const { Router } = express
const productsRoutes = require("./Routes/productos")
const carritoRoutes = require("./Routes/carrito")
const port = process.env.PORT || 8080
const fs = require("fs")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
let arr = require("./arr")

const router = Router()
const http = require("http")
const server = http.createServer(app)

app.use("/api", productsRoutes)
app.use("/api/carrito", carritoRoutes)







app.listen(port, () => {
    console.log("Server run on port " + port);
})



