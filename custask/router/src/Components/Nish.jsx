import React from 'react'
import { Link } from 'react-router-dom';

const Nish = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6 relative overflow-hidden">

      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl mix-blend-overlay animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl mix-blend-overlay animate-pulse delay-1000"></div>
      </div>

      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 max-w-xl w-full text-center shadow-2xl border border-white/20 relative z-10 transform transition-all hover:scale-[1.01]">
        <div className="mb-10 flex justify-center">
          <div className="w-24 h-24 bg-white/90 rounded-2xl flex items-center justify-center shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
            <span className="text-5xl font-bold bg-gradient-to-br from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              N
            </span>
          </div>
        </div>

        <h1 className="text-4xl font-black text-white mb-6 tracking-tight drop-shadow-md">
          Unlock Premium Features
        </h1>
        <p className="text-lg text-indigo-50 mb-10 leading-relaxed font-light">
          This is a demonstration of nested routing with high-fidelity UI design.
          Experience the seamless blend of functionality and aesthetics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link to="/" className="w-full bg-white text-indigo-600 font-bold py-4 px-6 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/20">
            Back Home
          </Link>
          <Link to="/about" className="w-full bg-indigo-900/40 text-white font-bold py-4 px-6 rounded-xl border border-indigo-200/30 hover:bg-indigo-900/60 transition-colors backdrop-blur-sm">
            About Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nish;