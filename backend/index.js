require('dotenv').config();
const express = require('express');
const app=express();

app.use(express.json());


app.use('/api', require('./api/routes'));


app.listen(process.env.PORT, ()=>{
    console.log(`Server is Listing on PORT ${process.env.PORT}`);
})