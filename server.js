const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroutes = require("./routes/rootroutes");
const connectDB = require("./config/db");
const productroutes =require("./routes/productroutes");
const getproductcontroller = require("./controllers/products/getproductcontroller");

const PORT = process.env.PORT || 6000 || 8080;
const app = express();
connectDB();

app.use("/",rootroutes)

app.use("/products", productroutes);

app.listen(PORT,()=>
{
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.white);
})