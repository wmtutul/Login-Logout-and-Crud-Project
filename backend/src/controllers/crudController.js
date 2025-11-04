const crudModel = require('../models/crudModel');



//=====Create======= API=> POST: http://localhost:8000/api/create
exports.create = async(req,res) => {
    try{
        const userData = new crudModel(req.body);
        if(!userData){
            return res.status(404).json({msg: "User data not found"})
        } 
        const saveData = await userData.save();
        res.status(200).json(saveData);

    }catch(error){
        res.status(500).json({error: error})
    }
}



//=====All User=========== API=> GET: http://localhost:8000/api/getAll
exports.getAll = async(req,res) => {
    try{
        const allUser = await crudModel.find();
        if(!allUser){
            return res.status(404).json({msg: "User data not found"})
        }
        res.status(200).json(allUser);

    }catch(error){
        res.status(500).json({error: error})
    }
}


//======get Single user Data ====== API => GET: http://localhost:8000/api/getOne/6625237974fb4f3465326b6b
exports.getOne = async(req,res) => {
    try{
        const id = req.params.id;
        const userExist = await crudModel.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "User data not found"})
        }
        res.status(200).json(userExist);

    }catch(error){
        res.status(500).json({error: error})
    }
}



//======Update user Data ====== API => PUT: http://localhost:8000/api/update/6625237974fb4f3465326b6b
exports.update = async(req,res) => {
    try{
        const id = req.params.id;
        const userExist = await crudModel.findById(id);
        if(!userExist){
            return res.status(401).json({msg: "User data not found"})
        }

        const updatedData = await crudModel.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updatedData);

    }catch(error){
        res.status(500).json({error: error})
    }
}


//======Delete user Data ====== API => DELETE: http://localhost:8000/api/delete/6625ba7579e2cda8232f4a86
exports.deleteUser = async(req,res) => {
    try{
        const id = req.params.id;
        const userExist = await crudModel.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "User data not found"})
        }
        await crudModel.findByIdAndDelete(id);
        res.status(200).json({msg: "User deleted Successfully"});

    }catch(error){
        res.status(500).json({error: error})
    }
}

