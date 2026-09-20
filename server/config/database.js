const mongoose = require("mongoose");
require("dotenv").config();

console.log("🔍 MongoDB URL:", process.env.MONGODB_URL); 

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        serverSelectionTimeoutMS: 5000,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch((error)=> {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};
