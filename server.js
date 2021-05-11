const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const dotevn = require('dotenv')
const hero = require('./hero/hero');
const bodyParser = require('body-parser');
const heroRoutes = require('./Routes/hero_routes')
const logsRoutes = require('./Routes/logs_routes')
dotevn.config()

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(logger);// temporary logs

mongoose.connect(process.env.dbConnection, {useNewUrlParser:true}, {useUnifiedTopology: true}, () => {
    console.log('connected to db');
})

app.use(heroRoutes);
app.use(logsRoutes);

function logger(req,res,next)  {
    let logs = {
        date: new Date().toLocaleString(),
       method: req.method,
       url: req.url,
    }

    fs.appendFileSync('logs.txt', `${JSON.stringify(logs)}, \n`)
    console.log({
       date: new Date().toLocaleString(),
       method: req.method,
       url: req.url
    })
    next()
}


app.listen(8080, () => {
    console.log('Up server');
})