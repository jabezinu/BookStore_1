// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import { IoMdArrowRoundBack } from "react-icons/io";
// import { TbFidgetSpinner } from "react-icons/tb";

// const Show = () => {
//   const [book, setBook] = useState({});
//   const [loading, setLoading] = useState(false);
//   const {id} = useParams()
  
//   useEffect(() => {
//     setLoading(true)
//     axios.get(`http://localhost:5555/books/${id}`)
//     .then((res) => {
//       setBook(res.data)
//       setLoading(false)
//     })
//     .catch((err) => {
//       console.log(err)
//       setLoading(false)
//     })
//   },[])
//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       {loading ? (
//         <div className="flex justify-center items-center min-h-screen">
//           <TbFidgetSpinner className="text-4xl text-blue-600 animate-spin" />
//         </div>
//       ) : (
//         <div className="max-w-2xl mx-auto">
//           <div className="mb-6">
//             <IoMdArrowRoundBack className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer transition-colors" />
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Detail</h1>
            
//             <div className="space-y-4">
//               <div>
//                 <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Title</p>
//                 <p className="text-lg text-gray-800 mt-1">{book.title}</p>
//               </div>
              
//               <div>
//                 <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Author</p>
//                 <p className="text-lg text-gray-800 mt-1">{book.author}</p>
//               </div>
              
//               <div>
//                 <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Published Year</p>
//                 <p className="text-lg text-gray-800 mt-1">{book.publishedYear}</p>
//               </div>
              
//               <div>
//                 <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Created At</p>
//                 <p className="text-lg text-gray-800 mt-1">{book.createdAt}</p>
//               </div>
              
//               <div>
//                 <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Updated At</p>
//                 <p className="text-lg text-gray-800 mt-1">{book.updatedAt}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Show




import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { TbFidgetSpinner } from "react-icons/tb";

const Show = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams()
  
  useEffect(() => {
    setLoading(true)
    axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/books/${id}`)
    .then((res) => {
      setBook(res.data)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })
  },[])
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-28 h-28 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {loading ? (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="relative">
            <TbFidgetSpinner className="text-6xl text-white animate-spin" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
          <p className="text-white text-lg mt-4 animate-pulse">Loading your book...</p>
        </div>
      ) : (
        <div className="relative z-10 p-6 md:p-12">
          {/* Back button with glassmorphism */}
          <div className="mb-8">
            <Link to={`/`}>
              <button className="group flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <IoMdArrowRoundBack className="text-2xl text-white group-hover:text-cyan-300 transition-colors duration-300" />
                <span className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">Back</span>
              </button>
            </Link>
          </div>
          
          {/* Main content card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Header with gradient */}
              <div className="bg-gradient-to-r from-cyan-400/20 to-purple-400/20 p-8 border-b border-white/10">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  Book Details
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
              </div>
              
              {/* Book content */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left column */}
                  <div className="space-y-8">
                    <div className="group">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <p className="text-cyan-300 font-semibold uppercase tracking-wider text-sm">Title</p>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-cyan-100 transition-colors duration-300">
                        {book.title}
                      </p>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <p className="text-purple-300 font-semibold uppercase tracking-wider text-sm">Author</p>
                      </div>
                      <p className="text-xl md:text-2xl font-semibold text-white/90 group-hover:text-purple-100 transition-colors duration-300">
                        {book.author}
                      </p>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-2 h-2 bg-pink-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <p className="text-pink-300 font-semibold uppercase tracking-wider text-sm">Published Year</p>
                      </div>
                      <p className="text-xl font-medium text-white/80 group-hover:text-pink-100 transition-colors duration-300">
                        {book.publishedYear}
                      </p>
                    </div>
                  </div>
                  
                  {/* Right column - timestamps */}
                  <div className="space-y-8">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-green-300 font-semibold uppercase tracking-wider text-sm">Created</p>
                      </div>
                      <p className="text-lg font-medium text-white/80">
                        {new Date(book.createdAt).toLocaleString()}
                      </p>
                    </div>
                    
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse animation-delay-1000"></div>
                        <p className="text-yellow-300 font-semibold uppercase tracking-wider text-sm">Updated</p>
                      </div>
                      <p className="text-lg font-medium text-white/80">
                        {new Date(book.updatedAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="mt-12 flex justify-center">
                  <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Show