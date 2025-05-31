import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI, PORT } from './config.js';
import router from './routes/routes.js';
import cors from 'cors';

const app = express();
const port = PORT || 5000;
app.use(express.json())

app.use(cors())
app.use('/books', router)

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`server is runinng on ${port}`)
        })
    })
    .catch((err) => {
        console.log(err)

    })
