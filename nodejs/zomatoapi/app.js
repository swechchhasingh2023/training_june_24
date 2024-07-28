let express = require('express');
let app = express();
let port = 9110;
let cors = require('cors')

app.use(cors())
app.get('/', (req, res) =>{
    res.send('Hiii from Express')
})

app.get('/location', (req, res) =>{
    res.send('Hiii from location')
})

app.get('/quicksearch', (req, res) =>{
    res.send('Hiii from quicksearch')
})

app.listen(port, (err) =>{
    if (err) throw err;
    console.log(`Server is running on port ${port}`)
})