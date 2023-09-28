const express=require('express');

const app=express();

 app.get('/testing' , (req , res)=>{

   res.send('hello sandeep world')

})

app.listen(8080,()=>{console.log(`server is running in port 8080`)});