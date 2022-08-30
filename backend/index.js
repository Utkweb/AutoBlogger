const express = require('express');
const app=express();
const port = 5000;
const userRouter =require('./router/userRouter');
const videoRouter =require('./router/videoRouter');
const utilRouter =require('./router/util');
const cors = require('cors');

app.use(express.json());

// use to connect the frontend to backend 

app.use(cors({origin:'http://localhost:3000'}));

app.use('/user',userRouter);
app.use('/video',videoRouter);
app.use('/util',utilRouter);


app.get('/home',(req,res)=>{
    res.send('Namaste Duniyaaa!');
})


app.listen(port, ()=>{
    
    console.log('the server is started');
});