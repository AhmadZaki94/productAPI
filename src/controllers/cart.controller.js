const express = require('express');
const Cart = require('../models/cart.model');
const router = express.Router();

router.post('/', async(req, res) => {
    try{
        const cart = await Cart.create(req.body);
        res.status(201).send(cart);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.get('/', async(req,res) => {
    try{
        const cart = await Cart.find().lean().exec();
        res.status(200).send(cart);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.get('/:id', async(req,res) => {
    try{
        const cart = await Cart.findById(req.params.id).lean().exec();
        res.status(200).send(cart);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});


router.patch('/:id', async(req,res) => {
    try{
        const cart = await Cart.findOneAndUpdate({id:req.params.id}, req.body, {new: true}).lean().exec();
        res.status(200).send(cart);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

router.delete('/:id', async(req,res) => {
    try{
        const cart = await Cart.findOneAndDelete({id:req.params.id})
        res.status(200).send(cart);
    }catch(err){
        return res.status(500).send({message: err.message});
    }
});

module.exports = router;
