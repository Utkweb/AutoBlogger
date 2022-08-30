// signup form    
const {Schema, model} = require('../connection');

const myschema = new Schema({
    title:String,
    description:String,
    file:String,
    thumbnail:String,
    createdAt:Date,
    createdBy:String
});

module.exports = model('video',myschema);