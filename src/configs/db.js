const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://zaki:zaki1234@ecomproject.no9itn0.mongodb.net/?retryWrites=true&w=majority");
}

module.exports = connect;