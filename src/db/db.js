const mongoose = require('mongoose')

async function connectDB(){
   // await  mongoose.connect(insert your mongodb cluster string here)
  console.log("connected to database")
}

module.exports = connectDB
