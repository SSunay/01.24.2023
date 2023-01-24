const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const {Schema}=mongoose
const dotenv =require('dotenv')
dotenv.config()

const  ProductSchema= new Schema({
        catacory:{type:String,required:true},
        title:{type:String,required:true},
        name:{type:String,required:true},
        price:{type:Number,required:true},
        img:{type:String,required:true},
})

const Product= mongoose.model('products',ProductSchema)

app.use(cors())
app.use(bodyParser.json())

//// get all data
app.get('/products', (req, res) => {
    Product.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
})

/// get by id 

app.get('/products/:_id',(req,res)=>{
    const{_id}=req.params
    Product.findById(_id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)
            }else{
                res.status(404).json({message:'not found...'})
            }
        }else{
            res.status(500).json({message:err})
        }
    })
})

/// delete

app.delete('/products/:_id',(req,res)=>{
    const {_id}=req.params
    Product.findByIdAndDelete(_id,(err,doc)=>{
        if(!err){
            res.send(doc)
        }else{
            res.status(500).json({message:err})
        }
    })
})

////post

app.post('/products',(req,res)=>{
    let product= new Product({
        catacory:req.body.catacory,
        title:req.body.title,
        name:req.body.name,
        price:req.body.price,
        img:req.body.img,

    })
    product.save()
    res.send('success...')
})


const PORT =process.env
const DB = process.env.DB_URL.replace('<password>',process.env.PASSWORD)

mongoose.connect(DB,(err)=>{
    if(!err){
        console.log('DB connected')
        app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
    }
})




