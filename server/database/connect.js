const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://nihalmp45:Nihal101@cluster0.rvuyxjr.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
 .then(()=>console.log('connected to mongo'))
 .catch(err => console.log(err))
}

module.exports = connectDB