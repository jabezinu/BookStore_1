// import axios from 'axios'
// import React, { useState } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { TbFidgetSpinner } from "react-icons/tb";
// import { IoMdArrowRoundBack } from "react-icons/io";

// const Delete = () => {
//   const {id} = useParams()
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()

//   const handleDeleteButton = () => {
//     setLoading(true)
//     axios
//       .delete(`http://localhost:5555/books/${id}`)
//       .then(() => {
//         setLoading(false)
//         navigate('/')
//       })
//       .catch((err) => {
//         console.log(err)
//         alert("Something went wrong while deleting book data check your console.")
//         setLoading(false)
//       })
//   }
//   return (
//     <div>
//       <Link to={'/'}>
//         <IoMdArrowRoundBack />
//       </Link>
//       {loading ? (
//         <TbFidgetSpinner /> 
//         ): (
//           <div>
//             <h1>Are You Sure You Want To Delete The Book?</h1>
//             <button onClick={handleDeleteButton}>Yes, DELETE it</button>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default Delete




import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TbFidgetSpinner } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";

const Delete = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleDeleteButton = () => {
        setLoading(true);
        axios
            .delete(`${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/books/${id}`)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                alert("Something went wrong while deleting book data. Check your console.");
                setLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-16 left-16 w-72 h-72 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute top-48 right-24 w-56 h-56 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-24 left-56 w-64 h-64 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
                <div className="absolute top-1/4 right-1/3 w-48 h-48 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-1000"></div>
                <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-r from-red-600 to-black rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-3000"></div>
            </div>

            {/* Floating embers for dramatic effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-40 animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 p-4 md:p-8">
                {/* Enhanced back button */}
                <div className="mb-8">
                    <Link to={'/'}>
                        <button className="group relative flex items-center space-x-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl px-8 py-4 border border-white/30 hover:from-white/20 hover:to-white/10 transition-all duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl hover:shadow-red-500/25">
                            <div className="relative">
                                <IoMdArrowRoundBack className="text-3xl text-white group-hover:text-red-300 transition-all duration-300 group-hover:scale-125 group-hover:-translate-x-1" />
                                <div className="absolute inset-0 bg-red-400/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <span className="text-white font-bold text-lg group-hover:text-red-300 transition-colors duration-300">Escape to Safety</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                    </Link>
                </div>

                {/* Main content with dramatic styling */}
                <div className="max-w-2xl mx-auto">
                    <div className="relative bg-gradient-to-br from-red-800/15 to-black/15 backdrop-blur-3xl rounded-[2rem] border border-red-500/30 shadow-2xl overflow-hidden">
                        {/* Animated border effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 via-purple-600/30 to-orange-600/30 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse"></div>

                        {/* Enhanced header */}
                        <div className="relative bg-gradient-to-r from-red-700/40 via-purple-700/40 to-black/40 backdrop-blur-2xl p-8 border-b border-red-500/20">
                            <div className="text-center relative">
                                {/* Floating icon with fiery glow */}
                                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl rotate-12 opacity-80 animate-pulse"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 rounded-3xl -rotate-12 opacity-60 animate-pulse animation-delay-1000"></div>
                                    <div className="relative bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl w-20 h-20 flex items-center justify-center shadow-2xl">
                                        <span className="text-4xl filter drop-shadow-lg">🔥</span>
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-orange-400 mb-4 tracking-tight leading-tight">
                                    DELETE BOOK
                                </h1>

                                {/* Enhanced gradient line */}
                                <div className="relative w-48 h-2 mx-auto mb-6">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-orange-500 rounded-full"></div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-orange-500 rounded-full blur-sm opacity-70"></div>
                                </div>

                                <p className="text-white/90 text-lg md:text-xl font-light">Are you sure you want to erase this masterpiece?</p>

                                {/* Decorative elements */}
                                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-red-600/30 to-transparent rounded-full blur-xl animate-pulse"></div>
                                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-orange-600/30 to-transparent rounded-full blur-xl animate-pulse animation-delay-2000"></div>
                            </div>
                        </div>

                        {/* Enhanced confirmation content */}
                        <div className="p-8 md:p-12">
                            {loading ? (
                                <div className="flex flex-col justify-center items-center py-24">
                                    <div className="relative mb-8">
                                        <div className="w-24 h-24 border-4 border-white/20 border-t-red-500 border-r-purple-500 border-b-orange-500 rounded-full animate-spin"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-orange-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                                        <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-red-500 rounded-full blur-lg opacity-40 animate-pulse animation-delay-1000"></div>
                                    </div>
                                    <p className="text-white text-2xl font-light animate-pulse mb-2">Erasing from existence...</p>
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
                                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce animation-delay-400"></div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {/* Confirmation message */}
                                    <div className="text-center">
                                        <p className="text-white/80 text-xl font-medium">
                                            This action is <span className="text-red-400 font-bold">permanent</span>. Proceed with caution!
                                        </p>
                                    </div>

                                    {/* Epic Delete Button */}
                                    <div className="pt-8">
                                        <button
                                            onClick={handleDeleteButton}
                                            disabled={loading}
                                            className="group relative w-full bg-gradient-to-r from-red-600 via-purple-600 to-orange-600 hover:from-red-500 hover:via-purple-500 hover:to-orange-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-black py-6 px-12 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:rotate-0 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 via-purple-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                            <div className="relative flex items-center justify-center space-x-4">
                                                <span className="text-3xl animate-bounce group-hover:animate-spin">💥</span>
                                                <span className="text-2xl tracking-widest font-black">
                                                    {loading ? 'DELETING...' : 'YES, DELETE IT'}
                                                </span>
                                                <span className="text-3xl animate-bounce group-hover:animate-spin animation-delay-500">🔥</span>
                                            </div>
                                            <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute -inset-1 bg-gradient-to-r from-red-400/50 via-purple-400/50 to-orange-400/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </button>
                                    </div>

                                    {/* Enhanced decorative elements */}
                                    <div className="flex justify-center pt-8">
                                        <div className="flex space-x-4">
                                            {[...Array(7)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-3 h-3 rounded-full animate-pulse bg-gradient-to-r ${
                                                        i % 3 === 0 ? 'from-red-500 to-orange-500' :
                                                        i % 3 === 1 ? 'from-purple-500 to-red-500' :
                                                        'from-orange-500 to-purple-500'
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

                    {/* Enhanced warning card */}
                    <div className="mt-8 relative bg-gradient-to-r from-red-500/20 via-purple-500/20 to-orange-500/20 backdrop-blur-2xl rounded-3xl border border-red-400/30 p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400/5 via-purple-400/5 to-orange-400/5 animate-pulse"></div>
                        <div className="relative flex items-center space-x-6">
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    <span className="text-2xl">⚠️</span>
                                </div>
                                <div className="absolute -inset-2 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-2xl blur-lg animate-pulse"></div>
                            </div>
                            <div>
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300 font-bold text-2xl mb-2">
                                    ⚡ Final Warning
                                </p>
                                <p className="text-white/90 text-lg font-light">
                                    Deleting this book is irreversible. Make sure it’s what you want! 🔥
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom animation for floating embers */}
            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0); opacity: 0.4; }
                        50% { opacity: 0.8; }
                        100% { transform: translateY(-100px); opacity: 0; }
                    }
                    .animate-float {
                        animation: float linear infinite;
                    }
                `}
            </style>
        </div>
    );
};

export default Delete;