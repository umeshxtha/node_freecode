const express = require('express')
const app = express()
app.get('/',(req,res)=>{
res.send('homepage')
console.log()
})

// app.get 
app.listen(5000,()=>{
    console.log('serve is listening')
})
