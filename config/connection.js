const mongoose = require('mongoose');
const dbKey = process.env.mongooseURL;

mongoose.connect(dbKey, function(error) {
    if(error) {
        return console.log('the connection broke');
    } else {
        console.log('mongoose connection successful');
    }
});

module.exports = mongoose;