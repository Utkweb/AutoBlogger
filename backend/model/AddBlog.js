const {Schema, model} = require('../connection');

const myschema = new Schema({
    title:String,
    description:String,
    category:String,
    data:String,
    createdAt:Date,
    image:String,
    createdBy:String
});

module.exports = model('blogs',myschema);