const express = require('express')

const app = express();

app.get('/', (req,res)=>{
    res.send('<h1>ben</h1>')
})
app.get('/game', (req,res)=>{
    res.send('<h1>roman</h1>')
})
app.get('/try', (req,res)=>{
    res.send('<h1>tal<h1>')
})

let port = process.env.PORT ||3000;

app.listen(port, function(){
    console.log('running')
})