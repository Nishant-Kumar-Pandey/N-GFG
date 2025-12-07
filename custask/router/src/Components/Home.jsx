import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Ambient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-pink-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-2000"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold tracking-wider mb-6 border border-indigo-100 uppercase">
          v 2.0.0 Release
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
          Minimalist Design.<br />
          <span className="text-indigo-600">Maximum Impact.</span>
        </h1>
        <p className="text-slate-600 mb-10 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Experience a fluid interface built with React Router and Tailwind CSS. Clean lines, smooth transitions, and a focus on content.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/about" className="px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:scale-105 hover:shadow-lg active:scale-95">
            Explore Now
          </Link>
          <Link to="/contact" className="px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all hover:scale-105 hover:border-slate-300 hover:shadow-md active:scale-95">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home