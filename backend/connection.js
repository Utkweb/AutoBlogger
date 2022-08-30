// to connect with database
const mongoose = require('mongoose');

const url = "mongodb+srv://UtkarshS:7236989916@cluster0.o9fwt.mongodb.net/AutoBlogger?retryWrites=true&w=majority";

mongoose.connect(url)
.then(() => {
    console.log('connect to database');
    
}).catch((err) => {
    console.error(err);
    
});

module.exports=mongoose;