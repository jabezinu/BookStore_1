// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { IoMdArrowRoundBack } from "react-icons/io";

// const Edit = () => {
//   const [title, setTitle] = useState('')
//   const [author, setAuthor] = useState('')
//   const [publishedYear, setPublishedYear] = useState()
//   const [loading, setLoading] = useState(false);
//   const {id} = useParams();

//   useEffect(() => {
//     setLoading(true)
//     axios.get(`http://localhost:5555/books/${id}`)
//     .then((res) => {
//       setTitle(res.data.title)
//       setAuthor(res.data.author)
//       setPublishedYear(res.data.publishedYear)
//       setLoading(false)
//     })
//     .catch((err) => {
//       console.log(err)
//       setLoading(false)
//     })
//   },[])

//   const handleUpdateButton = () => {
//     setLoading(true)
//     axios
//     .put(`http://localhost:5555/books/${id}`, {title, author, publishedYear})
//     .then(() => {
//         setLoading(false)        
//     })
//     .catch((error) => {
//       setLoading(false)
//       alert("Something went wrong while updating check you console")
//       console.log(error)
//     })

//   }
//   return (
//     <div>
//       <Link to={'/'}><IoMdArrowRoundBack /></Link>
//       <div>
//         <h1>Update Book Data</h1>
//         <label>Title: </label>
//         <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
//         <label>Author: </label>
//         <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)}/>
//         <label>Published Year: </label>
//         <input type='number' value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} />
//         <Link to={`/`}>
//           <button onClick={handleUpdateButton}>Update</button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Edit




import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

const Edit = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishedYear, setPublishedYear] = useState()
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    setLoading(true)
    axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/books/${id}`)
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
    .put(`${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/books/${id}`, {title, author, publishedYear})
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-32 left-48 w-56 h-56 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-3000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-6 md:p-12">
        {/* Enhanced back button */}
        <div className="mb-12">
          <Link to={'/'}>
            <button className="group relative flex items-center space-x-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl px-8 py-4 border border-white/30 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="relative">
                <IoMdArrowRoundBack className="text-3xl text-white group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-125 group-hover:-translate-x-1" />
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors duration-300">Back to Galaxy</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>

        {/* Main content with enhanced styling */}
        <div className="max-w-2xl mx-auto p-4 md:p-8">
          <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/30 shadow-2xl overflow-hidden">
            {/* Animated border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>
            
            {/* Enhanced header */}
            <div className="relative bg-gradient-to-r from-indigo-600/40 via-purple-600/40 to-pink-600/40 backdrop-blur-2xl p-12 border-b border-white/20">
              <div className="text-center relative">
                {/* Floating icon with glow */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl rotate-12 opacity-80 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl -rotate-12 opacity-60 animate-pulse animation-delay-1000"></div>
                  <div className="relative bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl w-20 h-20 flex items-center justify-center shadow-2xl">
                    <span className="text-4xl filter drop-shadow-lg">✨</span>
                  </div>
                </div>

                <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 mb-4 tracking-tight leading-tight">
                  EDIT BOOK
                </h1>
                
                {/* Enhanced gradient line */}
                <div className="relative w-48 h-2 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-sm opacity-70"></div>
                </div>
                
                <p className="text-white/90 text-xl md:text-2xl font-light">Transform your literary masterpiece</p>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400/30 to-transparent rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-pink-400/30 to-transparent rounded-full blur-xl animate-pulse animation-delay-2000"></div>
              </div>
            </div>

            {/* Enhanced form content */}
            <div className="p-12 md:p-16">
              {loading ? (
                <div className="flex flex-col justify-center items-center py-24">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 border-4 border-white/20 border-t-cyan-400 border-r-purple-400 border-b-pink-400 rounded-full animate-spin"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <div className="absolute inset-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-lg opacity-40 animate-pulse animation-delay-1000"></div>
                  </div>
                  <p className="text-white text-2xl font-light animate-pulse mb-2">Crafting your masterpiece...</p>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </div>
              ) : (
                <div className="space-y-12">
                  {/* Enhanced Title Input */}
                  <div className="group relative">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 ${focusedField === 'title' ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-150 shadow-lg shadow-cyan-400/50' : 'bg-cyan-400'} animate-pulse`}></div>
                      <label className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 font-bold uppercase tracking-widest text-lg">
                        📚 Book Title
                      </label>
                    </div>
                    <div className="">
                      <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        onFocus={() => setFocusedField('title')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/30 rounded-3xl px-8 py-6 text-black text-xl placeholder-white/60 focus:outline-none focus:border-cyan-400/80 focus:from-white/20 focus:to-white/10 transition-all duration-500 hover:from-white/15 hover:to-white/8 focus:scale-105 focus:shadow-2xl focus:shadow-cyan-400/25"
                        placeholder="Enter the soul of your story..."
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-blue-400/0 to-cyan-400/0 hover:from-cyan-400/10 hover:via-blue-400/5 hover:to-cyan-400/10 focus-within:from-cyan-400/20 focus-within:via-blue-400/10 focus-within:to-cyan-400/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
                      {focusedField === 'title' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-3xl blur-xl animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Author Input */}
                  <div className="group relative">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 ${focusedField === 'author' ? 'bg-gradient-to-r from-purple-400 to-pink-500 scale-150 shadow-lg shadow-purple-400/50' : 'bg-purple-400'} animate-pulse`}></div>
                      <label className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-bold uppercase tracking-widest text-lg">
                        ✒️ Author Name
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        onFocus={() => setFocusedField('author')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/30 rounded-3xl px-8 py-6 text-black text-xl placeholder-white/60 focus:outline-none focus:border-purple-400/80 focus:from-white/20 focus:to-white/10 transition-all duration-500 hover:from-white/15 hover:to-white/8 focus:scale-105 focus:shadow-2xl focus:shadow-purple-400/25"
                        placeholder="The genius behind the words..."
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-pink-400/0 to-purple-400/0 hover:from-purple-400/10 hover:via-pink-400/5 hover:to-purple-400/10 focus-within:from-purple-400/20 focus-within:via-pink-400/10 focus-within:to-purple-400/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
                      {focusedField === 'author' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-3xl blur-xl animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Published Year Input */}
                  <div className="group relative">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 ${focusedField === 'year' ? 'bg-gradient-to-r from-pink-400 to-orange-500 scale-150 shadow-lg shadow-pink-400/50' : 'bg-pink-400'} animate-pulse`}></div>
                      <label className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-300 font-bold uppercase tracking-widest text-lg">
                        📅 Published Year
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type='number'
                        value={publishedYear}
                        onChange={(e) => setPublishedYear(e.target.value)}
                        onFocus={() => setFocusedField('year')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/30 rounded-3xl px-8 py-6 text-black text-xl placeholder-white/60 focus:outline-none focus:border-pink-400/80 focus:from-white/20 focus:to-white/10 transition-all duration-500 hover:from-white/15 hover:to-white/8 focus:scale-105 focus:shadow-2xl focus:shadow-pink-400/25"
                        placeholder="When did magic happen..."
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-orange-400/0 to-pink-400/0 hover:from-pink-400/10 hover:via-orange-400/5 hover:to-pink-400/10 focus-within:from-pink-400/20 focus-within:via-orange-400/10 focus-within:to-pink-400/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
                      {focusedField === 'year' && (
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-400/30 to-orange-400/30 rounded-3xl blur-xl animate-pulse"></div>
                      )}
                    </div>
                  </div>

                  {/* Epic Update Button */}
                  <div className="pt-12">
                    <Link to={`/`}>
                      <button
                        onClick={handleUpdateButton}
                        disabled={loading}
                        className="group relative w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-black py-8 px-12 rounded-3xl transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:rotate-0 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative flex items-center justify-center space-x-4">
                          <span className="text-3xl animate-bounce group-hover:animate-spin">🚀</span>
                          <span className="text-2xl tracking-widest font-black">
                            {loading ? 'TRANSFORMING...' : 'UPDATE MASTERPIECE'}
                          </span>
                          <span className="text-3xl animate-bounce group-hover:animate-spin animation-delay-500">✨</span>
                        </div>
                        <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Button glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                    </Link>
                  </div>

                  {/* Enhanced decorative elements */}
                  <div className="flex justify-center pt-12">
                    <div className="flex space-x-4">
                      {[...Array(7)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full animate-pulse bg-gradient-to-r ${
                            i % 3 === 0 ? 'from-cyan-400 to-blue-500' :
                            i % 3 === 1 ? 'from-purple-400 to-pink-500' :
                            'from-pink-400 to-orange-500'
                          }`}
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced tip card */}
          <div className="mt-12 relative bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 backdrop-blur-2xl rounded-3xl border border-yellow-400/30 p-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-orange-400/5 to-red-400/5 animate-pulse"></div>
            <div className="relative flex items-center space-x-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <span className="text-2xl">💡</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-2xl blur-lg animate-pulse"></div>
              </div>
              <div>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 font-bold text-2xl mb-2">
                  ⚡ Pro Creator Tip
                </p>
                <p className="text-white/90 text-lg font-light">
                  Every great story deserves perfect details - make each field count! 🌟
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit