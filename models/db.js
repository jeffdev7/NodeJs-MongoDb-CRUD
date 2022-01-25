const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/StudentDb', {
    useNewUrlParser: true
},
err => {
    if(!err){
        console.log('Connection succeeded')

    }
    else{
        console.log('error in connection' +err)
    }
})
require('./studentModel')