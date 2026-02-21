require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))

app.use("/api/auth", require("./routes/auth"))
app.use("/api/stats", require("./routes/stats"))

app.listen(5000, () => console.log("Servidor rodando na porta 5000"))
