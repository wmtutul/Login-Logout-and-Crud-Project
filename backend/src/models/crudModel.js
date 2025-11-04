const mongoose = require('mongoose');


const crudSchema = new mongoose.Schema(
    {
        fname: {type:String, required:true},
        lname: {type:String, required:true},
        email: {type:String, required:true},
        password: {type:String, required:true},
    }
)


const crudModel = mongoose.model('Crud', crudSchema)
module.exports = crudModel;



