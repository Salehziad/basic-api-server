'use strict';
const express=require('express');
const app=express();
app.use(express.json());
const foodRoutes=require('./routes/food');
const clothesRoute=require('./routes/clothes');
const handleNotFound=require('./error-handlers/404');
const handleServerError=require('./error-handlers/500');
const logger=require('./middlewar/logger');




app.use(logger);
app.use(foodRoutes);
app.use(clothesRoute)
app.use(handleNotFound);
app.use(handleServerError);
app.get('/',(req,res)=>{
    res.send('Welcome to our server food/clothes')
});


function start(PORT){
    app.listen(PORT,()=>{
        console.log(`server is lesting on port ${PORT}`);
    });
}

module.exports={
    app:app,
    start:start
}