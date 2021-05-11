const express = require('express')
let router = express.Router()
const fs = require('fs')

router.get('/logs', (res,req) => {
   
    const dataBuffer = fs.readFileSync('logs.txt')
    const dataJSON = dataBuffer.toString()
    
        res.send({
            data: dataJSON,
            message: 'Success'
        })
    
})

module.exports = router