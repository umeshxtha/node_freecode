const express = require('express')
const path = require('path')
const app = express();

// setup static and middleware

app.use(express.static('./public'))
app.get('/',(req,res)=>{
res.sendFile(path.resolve(__dirname,'./navbar-app/index.html')
)
})

app.all('*',(res,req)=>{
    res.status(404).send('404 Not Found')
})

app.listen(5000,(req,res)=>{
    console.log('server is running on port 5000')
})

