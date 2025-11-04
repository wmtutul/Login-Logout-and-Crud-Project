const express = require('express');
const { register, allRegister, login } = require('../controllers/loginController');



//router object
const loginRouter = express.Router();

loginRouter.post('/register', register)
loginRouter.get('/allRegister', allRegister)
loginRouter.post('/login', login)



module.exports = loginRouter;





