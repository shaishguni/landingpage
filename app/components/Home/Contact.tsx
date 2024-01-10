import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("meqyojwk");
  if (state.succeeded) {
      return <p className="text-lg text-green-600 font-semibold">Thank you for reaching out. We will get back to you soon!</p>;
  }
  return (
    <div className={`relative max-w-lg mx-auto my-10 p-8 shadow-md rounded-md bg-cover `} >
    <div className="  max-w-lg ml-12  mx-auto my-10 p-8  shadow-md rounded-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Contact us</h1>
      <p className=" font-semibold text-gray-800 mb-6">Are you open to a conversation about a revolutionary project that has the potential to transform the way you conduct business?</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-md font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-sm text-red-600"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-md font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            className="text-sm text-red-600"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-md font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-sm text-red-600"
          />
        </div>

        <div className="flex justify-center">
          <button 
            type="submit" 
            disabled={state.submitting}
            className="mt-3 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    
    </div>
    </div>
  );
}

export default Contact;
