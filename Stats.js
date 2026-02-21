const mongoose = require("mongoose")

const StatsSchema = new mongoose.Schema({
  ocorrencias: Number,
  prisoes: Number,
  armas: Number,
  municoes: Number,
  neutralizados: Number,
  veiculos: Number,
  dinheiro: Number,
  drogas: Number
})

module.exports = mongoose.model("Stats", StatsSchema)
