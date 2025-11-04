const loginModel = require('../models/loginModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'login_token_secretkey'




//=====Register user======= API=> http://localhost:8000/api/register
exports.register = async(req,res) => {
    try{
        const {email, username, password} =req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new loginModel({email, username, password:hashedPassword});
        await newUser.save();
        res.status(201).json({message: "User Created Successfully"});

    }catch(error){
        res.status(500).json({error: 'Error Signing Up'})
    }
}


//=====All User=========== API=> http://localhost:8000/api/allRegister
exports.allRegister = async(req,res) => {
    try{
        const allUser = await loginModel.find();
        res.status(201).json(allUser);

    }catch(error){
        res.status(500).json({error: 'Unable to get Users'})
    }
}



//====Login User========== API=> http://localhost:8000/api/login
exports.login = async(req,res) => {
    try{
        const {username, password} =req.body;
        const user = await loginModel.findOne({username});

        if(!user){
            return res.status(401).json({error: 'Invalid Credentials'})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({error: 'Invalid Credentials'})
        }
        
        const token = jwt.sign({userId: user._id}, SECRET_KEY, {expiresIn: '1hr'})
        res.json({message: 'Login Successfull'})

    }catch(error){
        res.status(500).json({error: 'Unable to Login Users'})
    }
}






