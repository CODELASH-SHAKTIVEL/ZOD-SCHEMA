const express = require('express')
const {z} = require('zod')
const app = express()

app.use(express.json())


const valiate = z.string().email()

const userinput = "user@gmail.com"

app.get('/valiate', function(req,res){
    const request = req.body.kind
    res.json({
        msg:'hiii',
        kind:request,
    })
    if(userinput){
        res.json({
            msg:'valiate the email'
        })
    }else{
        res.status(404).json({
            msg:'not found error'
        })
    }
    console.log('hello world')
    console.log(request)
})

app.listen(3000);