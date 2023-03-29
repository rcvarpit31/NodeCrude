const express = require('express');
const dbConnect = require('./config/dbConfig');
const bodyParser = require('body-parser');

const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const authRouther = require('./routes/authRoute');
const {notFound,errorHandler} = require('./middleware/errorHandler')
 
dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 app.use("/api/users/",authRouther);
 
 app.use(notFound);
 app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server is runing ${PORT} `);
})