import { Book } from '../models/BooksModel.js';
import express from 'express';

const router = express.Router();


router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
    try {
        const book = await Book.find()
        res.status(200).json(book)        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error while GETing all book"})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findById(id)
        res.status(200).json(book)        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error while GETing book by ID"})
    }
})
router.put('/:id', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id)
        res.status(200).json({message : "Book Delted successfully"})        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error in the delete route"})
    }
})

export default router