import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white p-10 md:p-12 rounded-2xl shadow-xl shadow-indigo-100/50">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center tracking-tight">Get in Touch</h2>
        <form className="space-y-8">
          {['Name', 'Email'].map((label) => (
            <div className="relative group" key={label}>
              <input
                type={label === 'Email' ? 'email' : 'text'}
                id={label.toLowerCase()}
                className="block py-2.5 px-0 w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer transition-colors"
                placeholder=" "
                required
              />
              <label
                htmlFor={label.toLowerCase()}
                className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {label}
              </label>
            </div>
          ))}

          <div className="relative group">
            <textarea
              id="message"
              rows="3"
              className="block py-2.5 px-0 w-full text-base text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-600 peer transition-colors resize-none"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>

          <button
            type="button"
            className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-xl text-sm px-5 py-4 text-center transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact