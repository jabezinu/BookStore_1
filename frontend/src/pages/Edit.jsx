import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

const Edit = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedYear, setPublishedYear] = useState()
  const [loading, setLoading] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
    .then((res) => {
      setTitle(res.data.title)
      setAuthor(res.data.author)
      setPublishedYear(res.data.publishedYear)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })
  },[])

  const handleUpdateButton = () => {
    setLoading(true)
    axios
    .put(`http://localhost:5555/books/${id}`, {title, author, publishedYear})
    .then(() => {
        setLoading(false)        
    })
    .catch((error) => {
      setLoading(false)
      alert("Something went wrong while updating check you console")
      console.log(error)
    })

  }
  return (
    <div>
      <Link to={'/'}><IoMdArrowRoundBack /></Link>
      <div>
        <h1>Update Book Data</h1>
        <label>Title: </label>
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label>Author: </label>
        <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)}/>
        <label>Published Year: </label>
        <input type='number' value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} />
        <Link to={`/`}>
          <button onClick={handleUpdateButton}>Update</button>
        </Link>
      </div>
    </div>
  )
}

export default Edit
