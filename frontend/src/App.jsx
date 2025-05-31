import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Show from './pages/Show'
import Delete from './pages/Delete'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books/create' element={<Create/>} />
        <Route path='/books/edit/:id' element={<Edit/>} />
        <Route path='/books/show/:id' element={<Show/>} />
        <Route path='/books/delete/:id' element={<Delete/>} />
      </Routes>
      
    </div>
  )
}

export default App
