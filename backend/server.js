import express from 'express';
import Book from './models/BooksModel.js';

const app = express();
const PORT = 5555;
app.post('/books', async (req, res) => {
    try {
        const {title, author, publishedYear} = req.body;
        const book = await Book.create({
            title,
            author,
            publishedYear,
        })
        console.log('test')
        if(book){
            return res.status.json({message: "book was successfully created!"})
        }        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error while createing the book"})
    }
})
app.get('/books', (req, res) => {
    res.status(200).json({Book})
})
app.listen(PORT, () => {
    console.log(`server is runinng on ${PORT}`)
})