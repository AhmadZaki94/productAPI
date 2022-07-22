const express = require('express');
const Product = require('../models/products.model');
const router = express.Router();

router.post('/', async(req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).send(product);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.get('/', async(req,res) => {
    try{
        const product = await Product.find().lean().exec();
        res.status(200).send(product);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.get('/:id', async(req,res) => {
    try{
        const product = await Product.findById(req.params.id).lean().exec();
        res.status(200).send(product);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});


router.patch('/:id', async(req,res) => {
    try{
        const product = await Product.findOneAndUpdate({id:req.params.id}, req.body, {new: true}).lean().exec();
        // console.log(product);
        res.status(200).send(product);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.delete('/:id', async(req,res) => {
    try{
        const product = await Product.findOneAndDelete({id:req.params.id})
        res.status(200).send(product);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

module.exports = router;
