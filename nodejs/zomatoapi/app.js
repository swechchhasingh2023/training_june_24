let express = require('express');
// import express from 'express';
let {dbConnect, getData} = require('./controller/dbController');
let app = express();
let port = 9111;
let cors = require('cors')



app.use(cors())
app.get('/', (req, res) =>{
    res.send('Hiii from Express')
})

app.get('/location', async(req, res) =>{
    let query = {}
    let collection = "location"
    let output = await getData(collection, query)
    res.send(output)
})

app.get('/quicksearch', (req, res) =>{
    res.send('Hiii from quicksearch')
})

app.listen(port, (err) =>{
    dbConnect()
    if (err) throw err;
    console.log(`Server is running on port ${port}`)
})