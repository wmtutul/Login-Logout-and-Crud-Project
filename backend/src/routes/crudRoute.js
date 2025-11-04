const express = require('express');
const { create, getAll, getOne, update, deleteUser } = require('../controllers/crudController');



//router object
const crudRouter = express.Router();

crudRouter.post('/create', create);
crudRouter.get('/getAll', getAll);
crudRouter.get('/getOne/:id', getOne);
crudRouter.put('/update/:id', update);
crudRouter.delete('/delete/:id', deleteUser);



module.exports = crudRouter;

