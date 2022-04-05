const mongoose = require('mongoose')
const conn = require("../database");

const covidData = mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    CountryCode: {
        type: String,
        required: true
    },
    Province: {
        type: String,
        required: false
    },
    City: {
        type: String,
        required: false
    },
    CityCode: {
        type: String,
        required: false
    },
    Lat: {
        type: String,
        required: true
    },
    Lon: {
        type: String,
        required: true
    },
    Confirmed: {
        type: String,
        required: true
    },
    Deaths: {
        type: String,
        required: true
    },
    Recovered: {
        type: String,
        required: true
    },
    Active: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    }  
})

var covid19Model=conn.model('Covid',covidData,'Covid_collection');
module.exports = covid19Model;
// module.exports = mongoose.model("covid", covid19Model);
// covid19Model.findOne((err,res)=>{
//     if(err) throw err;
//     console.log(res)
// })
