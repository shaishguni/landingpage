// SetIntersectionCircles.js

import React from 'react';

const Intersection = () => {
  return (
    <div className='flex justify-center items-center pt-4 pb-48 relative'>
      <div className="border border-black  w-96 h-96 bg-white z-12 rounded-full flex justify-center items-center text-center p-18   size-48 space-y-6 m-18 shadow-xl relative transition-all duration-500 transform hover:scale-105">
        <span className="absolute text-8xl left-0 top-0 text-purple-800">"</span>
        <span className="absolute text-4xl center-0 top-0 text-purple-800">Services</span>
        <div className='flex flex-row items-center'>
          
          <ol className=' pb-12  text-left '>

            <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">
              Web and APP Development
            </li>
            <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">
            Restful API Developement 
            </li>
            <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">
              Data Visualization and Representation
            </li>
             <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">
              Web Accessibility and Compliance 
            </li>
            <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">
              Progressive Web App (PWA) Development 
            </li>
          </ol>
        </div>
      </div>
      <div className='ml-4 z-12'>
        <div className='border border-black w-96 h-96 bg-white rounded-full flex justify-center items-center text-center p-8 shadow-xl relative -ml-4 transition-all duration-500 transform hover:scale-105'>
          <span className="absolute text-8xl left-0 top-0 text-purple-800">"</span>
          <br/>
           <span className="absolute text-4xl mt-4 center-0 top-0 text-purple-800">Our Stacks</span>
          <div className='flex flex-row items-center'>
            <ol className=' text-left pt-4'>
              <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">
               Python
              </li>
              <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">
               Javascript
              </li>
               <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">
               React.js 
              </li>
               <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">
                Pandas , Numpy, D3.js Sci.py , Tensorflow , OpenCV
              </li>
              <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">
               Next.js & MERN
              </li>

            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intersection;
