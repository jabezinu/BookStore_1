import express from 'express';
import mongoose from 'mongoose';
import router from './routes/routes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())

app.use(cors())
app.use('/books', router)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`server is runinng on ${port}`)
        })
    })
    .catch((err) => {
        console.log(err)

    })
