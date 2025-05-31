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
        <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-800 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-32 left-32 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-64 right-32 w-32 h-32 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-32 left-64 w-36 h-36 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
                <div className="absolute top-48 left-1/2 w-28 h-28 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
            </div>

            <div className="relative z-10 p-6 md:p-12">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                        Book Library
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4"></div>
                    <p className="text-white/80 text-lg md:text-xl">Manage your collection with style</p>
                </div>

                {/* Main content container */}
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                        {/* Table header */}
                        <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-lg border-b border-white/10">
                            <div className="grid grid-cols-12 gap-4 p-6 text-white font-semibold">
                                <div className="col-span-1 flex items-center">
                                    <span className="text-cyan-300 uppercase tracking-wider text-sm">#</span>
                                </div>
                                <div className="col-span-3 flex items-center">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                    <span className="text-cyan-300 uppercase tracking-wider text-sm">Title</span>
                                </div>
                                <div className="col-span-3 flex items-center">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                    <span className="text-purple-300 uppercase tracking-wider text-sm">Author</span>
                                </div>
                                <div className="col-span-2 flex items-center">
                                    <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                                    <span className="text-pink-300 uppercase tracking-wider text-sm">Year</span>
                                </div>
                                <div className="col-span-3 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                                    <span className="text-yellow-300 uppercase tracking-wider text-sm">Actions</span>
                                </div>
                            </div>
                        </div>

                        {/* Table content */}
                        <div className="divide-y divide-white/10">
                            {loading ? (
                                <div className="flex justify-center items-center py-20">
                                    <div className="relative">
                                        <div className="w-16 h-16 border-4 border-white/20 border-t-cyan-400 rounded-full animate-spin"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
                                    </div>
                                </div>
                            ) : books.length === 0 ? (
                                <div className="text-center py-20">
                                    <div className="text-6xl text-white/20 mb-4">📚</div>
                                    <p className="text-white/60 text-xl">No books found</p>
                                </div>
                            ) : (
                                books.map((book, index) => (
                                    <div 
                                        key={book._id} 
                                        className="group grid grid-cols-12 gap-4 p-6 hover:bg-white/5 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                                    >
                                        <div className="col-span-1 flex items-center">
                                            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                {index + 1}
                                            </div>
                                        </div>
                                        
                                        <div className="col-span-3 flex items-center">
                                            <div className="group-hover:translate-x-2 transition-transform duration-300">
                                                <p className="text-white font-semibold text-lg group-hover:text-cyan-300 transition-colors duration-300">
                                                    {book.title}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-span-3 flex items-center">
                                            <div className="group-hover:translate-x-2 transition-transform duration-300">
                                                <p className="text-white/90 font-medium group-hover:text-purple-300 transition-colors duration-300">
                                                    {book.author}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-span-2 flex items-center">
                                            <div className="bg-white/10 px-3 py-1 rounded-full border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                                                <p className="text-white/80 font-medium text-sm">
                                                    {book.publishedYear}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="col-span-3 flex items-center justify-center space-x-4">
                                            <Link 
                                                to={`/books/show/${book._id}`} 
                                                className="group/btn relative p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30 hover:from-blue-500/40 hover:to-cyan-500/40 hover:border-blue-400/60 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                                            >
                                                <FaInfoCircle className="w-5 h-5 text-blue-300 group-hover/btn:text-blue-100 transition-colors duration-300" />
                                                <div className="absolute inset-0 bg-blue-400/20 rounded-xl blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                            </Link>
                                            
                                            <Link 
                                                to={`/books/edit/${book._id}`} 
                                                className="group/btn relative p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-400/30 hover:from-green-500/40 hover:to-emerald-500/40 hover:border-green-400/60 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                                            >
                                                <GrUpdate className="w-5 h-5 text-green-300 group-hover/btn:text-green-100 transition-colors duration-300" />
                                                <div className="absolute inset-0 bg-green-400/20 rounded-xl blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                            </Link>
                                            
                                            <Link 
                                                to={`/books/delete/${book._id}`} 
                                                className="group/btn relative p-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl border border-red-400/30 hover:from-red-500/40 hover:to-pink-500/40 hover:border-red-400/60 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25"
                                            >
                                                <MdDelete className="w-5 h-5 text-red-300 group-hover/btn:text-red-100 transition-colors duration-300" />
                                                <div className="absolute inset-0 bg-red-400/20 rounded-xl blur opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer stats */}
                        {books.length > 0 && (
                            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-lg border-t border-white/10 p-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                            <span className="text-white/80 text-sm">Total Books: <span className="font-semibold text-green-300">{books.length}</span></span>
                                        </div>
                                    </div>
                                    <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home