import express from "express";
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
//import all routes
import authrouter from './routes/auth.js';
import productrouter from './routes/products.js';
// const cartRoute = require('./routes/cart')
// const productsRoute = require('./routes/products')
// const ordersRoute = require('./routes/orders')

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions={
        origin:"http://localhost:3000",
        credentials:true,
        optionSuccessStatus:200
}

mongoose.connect(process.env.MONGO_DB_URL)
        .then(() => console.log("Mongo DB connection successful"))
        .catch((err)=> console.log(err));


//API Routes
app.use(bodyParser.json());
app.use(cors(corsOptions))
app.use("/api/auth",authrouter);
app.use("/api/products",productrouter);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));