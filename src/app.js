console.log("Hello js")

const express = require('express')
const bodyParser= require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoResult = require('../src/database/models/covid19Model')


const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())
app.get('/status',(req,res)=>{
    res.send({
        message:"Hello world"
    })
})

app.post('/register', (req,res) => {

    res.send(
        {
            message: `Your user is registered ! have fun ${req.body.email}`
        }
    )
})

app.get('/covid_data', async (req,res) => {
     const dataCovid = await mongoResult.find({})
     
    //  console.log(dataCovid)
    //  console.log(typeof(dataCovid))
     res.json(dataCovid)
})
app.listen(process.env.PORT || 8082,'127.0.0.1')