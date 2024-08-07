const mongoose = require("mongoose");
const ProductCollection = require("../../models/ProductSchema");
const getproductcontroller = async(req,res) => {
    try {
        const product = await ProductCollection.find();
        res.status(200).send(product);
        console.log(`Data fetched successfully`);
    }
    catch (error) {
        res.status(504).send({
                message: "error fecthing products"
            });
        console.log(`Error occured : ${error}`);
    }
};
module.exports = getproductcontroller;  
