import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:5555/books`)
        .then((res) => {
            setBooks(res.data)
            setLoading(false)  
        })
        .catch((err) => {
            console.log(err)
            setLoading(false) 
        })
    }, [])
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
                <th>Author</th>
                <th>Published Year</th>
                <th>Opreations</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book, index) => (
                <tr key={book._id}>
                    <td>{index + 1}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publishedYear}</td>
                    <td>
                        <div>
                            <Link to={`/books/show/${book._id}`}><FaInfoCircle /></Link>
                            <Link to={`/books/edit/${book._id}`}><GrUpdate /></Link>
                            <Link to={`/books/delete/${book._id}`}><MdDelete /></Link>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
