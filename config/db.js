const mongoose = require("mongoose");
const colors = require('colors');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        // res.status(200).send({
        //     message: "Database connected"
        // })
        console.log(`Database is connected`.bgGreen.green);
    }
    catch (error) {
        // res.status(504).send({
        //     message: `Internal Server Error ${error}`,
        //     success: false,
        //     Description: "Database not connected"

        // })
        console.log("error");
    }
}
module.exports=connectDB;