import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 flex items-center justify-center p-8">
      <div className="max-w-3xl w-full animate-fade-in-up">
        <h2 className="text-4xl font-bold text-slate-900 mb-8 border-l-4 border-indigo-600 pl-6 tracking-tight">About Us.</h2>
        <div className="space-y-8 text-lg text-slate-600 font-light leading-relaxed">
          <p>
            We believe in the power of simplicity. Our mission is to strip away the unnecessary and focus on what truly matters: clear communication and intuitive design.
          </p>
          <p>
            Built with the latest technologies, this application serves as a testament to the harmony between performance and aesthetics. Every interaction is crafted with care.
          </p>
        </div>

        <div className="mt-16 flex items-center gap-6">
          <div className="h-px bg-slate-200 flex-grow"></div>
          <Link to="/about/nish" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors group flex items-center gap-2">
            Experiance Feature <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About