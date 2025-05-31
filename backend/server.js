import express from 'express';
import mongoose from 'mongoose';
import { MONGO_URI, PORT } from './config.js';
import { Book } from './models/BooksModel.js';

const app = express();
const port = PORT || 5000;
app.use(express.json())
app.post('/books', async (req, res) => {
    try {
        if(!req.body.title || !req.body.publishedYear || !req.body.author ){
            res.status(400).send({message: "Send all required fields"})
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishedYear: req.body.publishedYear,
        }

        const book = await Book.create(newBook)

        return res.status(201).send(book)     
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error while createing the book"})
    }
})

app.get('/books', async (req, res) => {
    try {
        const book = await Book.find()
        res.status(200).json(book)        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error while GETing all book"})
    }
})

app.get('/books/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id)
        res.status(200).json(book)        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error while GETing book by ID"})
    }
})
app.put('/books/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const updaedData = {
            title: req.body.title,
            author: req.body.author,
            publishedYear: req.body.publishedYear,
        }
        const book = await Book.findByIdAndUpdate(id, updaedData, {new: true})
        res.status(200).json(book)        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error in the update route"})
    }
})

app.delete('/books/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id)
        res.status(200).json({message : "Book Delted successfully"})        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error in the delete route"})
    }
})

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
