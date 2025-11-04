const express = require('express');



//=====Connect to Express app=====
const app = new express();




//=============Database Connection==============
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const PORT = process.env.PORT || 7000;
const URL = process.env.MONGO_URL


mongoose.connect(URL).then(()=>{
    console.log("Database Connected Successfully");

    app.listen(PORT, ()=>{
        console.log(`Server is running on port: http://localhost:${PORT}`)
    })
}).catch(error => console.log(error));



//=======Middleware import and implement======
  //--import--
  //===========
const bodyParser = require('body-parser');
const cors = require('cors');


  //--implement--
  //===========
app.use(bodyParser.json());
app.use(cors());





//==========Routing==============
const loginRouter = require('./src/routes/loginRoute');
const crudRouter = require('./src/routes/crudRoute');
app.use('/api', loginRouter)
app.use('/api', crudRouter)









