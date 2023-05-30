const mongoose = require('mongoose')
const {db} = require('./../configuration')

module.exports.connectDB = () => {
    mongoose.connect(db,  {useNewUrlParser: true})
    return mongoose.connection
}