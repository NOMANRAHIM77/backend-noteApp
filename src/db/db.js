const mongoose = require('mongoose')

async function connectDB(){
   await  mongoose.connect("mongodb+srv://nomanrahim53_db_user:LHx6Qpo6DIBfVvKX@backend-1.a9snt5z.mongodb.net/karachi")
  console.log("connected to database")
}

module.exports = connectDB