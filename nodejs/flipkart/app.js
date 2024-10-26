let express = require('express');
let app = express();
let port = 9109;
let cors = require('cors');
let {dbConnect, getData, postData,updateData,deleteData,} = require('./contoller/dbController');
let swaggerUi = require('swagger-ui-express');
let swaggerDocument = require('./swagger.json');
let package =require('./package.json');
let {ObjectId} = require('mongodb')

swaggerDocument.info.version= package.json
app.use('/api-doc', swaggerUi.serve,swaggerUi.setup(swaggerDocument))

let key = "12345678abcdef213"

app.use(express.json())
app.use(cors())

app.get('/health',(req,res)=>{
    console.log(res)
    res.send('Hi from Express')
})

app.get('/category',async (req,res) => {
    let query = {};
    let collection = "category"
    let authKey = req.headers['x-access-auth']
    if(authKey == key){
        let output = await getData(collection,query)
        res.status(200).send(output)
    }else{
        res.status(401).send(`Unaunthorised`) 
    }
   
})

app.get('/products', async (req,res)=>{
    let query = {}
    let productId = req.query.category_id;
    let collection = "products"
    if(productId){
        query = {category_id:Number(productId)}
    }else{
        query = {}
    }

    let output = await getData(collection,query)
    res.send(output)
    // res.send('Hi from location route')
})

app.get('/filter/:productId', async (req, res) => {
    let query = {};
    let productId = Number(req.params.productId);
    let hcost = Number(req.query.hcost);
    let lcost = Number(req.query.lcost);

    if (hcost && lcost) {
        query = {
            "product_id": productId,
            $and: [{ cost: { $gt: lcost, $lt: hcost } }]
        };
    } else {
        query = {
            "product_id": productId
        };
    }

    let collection = "products";
    let output = await getData(collection, query);
    res.send(output);
});


app.get('/details/:id', async(req,res)=>{
    let id = Number(req.params.id);
    let query={"product_id":id}
    // let query = {_id:new ObjectId(req.params.id)}
    let collection = "products"
    let output = await getData(collection, query);
    res.send(output);
})

//menu wrt to categoryID
app.get('/menu/:id',async(req,res) => {
    let query = {category_id:Number(req.params.id)}
    let output = await getData('menu',query)
    res.send(output)
})

//menuDetails{"id":[1,2,3]}
app.post('/menuDetails',async(req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {menu_id:{$in:req.body.id}};
        let collection = 'menu'
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send(`Pleass pass data in format of {"id":[101,102,103]}`)
    }
})


//place order
app.post('/placeOrder',async(req,res) => {
    let data = req.body;
    let collection = 'orders'
    let response = await postData(collection,data);
    res.send(response)
})

// get orders
app.get('/orders',async(req,res) => {
    let query = {};
    if(req.query.email){
        query = {email:req.query.email}
    }
    let collection = "orders";
    let output = await getData(collection,query);
    res.send(output) 
})

// update orders
app.put('/updateOrder',async(req,res) => {
    let collection = "orders"
    let condition = {"_id":new ObjectId(req.body._id) }
    let data ={
        $set:{
            "status":req.body.status
        }
    }
    let response = await updateData(collection,condition,data)
    res.send(response)
})

app.delete('/deleteOrder',async(req,res) => {
    let collection = "orders"
    let condition = {"_id":new ObjectId(req.body._id) }
    let response = await deleteData(collection,condition);
    res.send(response)
})

app.listen(port, (err) =>{
    dbConnect()
    if (err) throw err;
    console.log(`Server is running on port ${port}`)
})