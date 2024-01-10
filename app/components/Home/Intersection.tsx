import React from 'react';

const Intersection = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center pt-4 pb-48 relative'>
      {/* Services Circle */}
      <div className="border border-black w-full lg:w-96 h-full lg:h-96 bg-white rounded-full flex justify-center items-center text-center p-18 shadow-xl relative transition-all duration-500 transform hover:scale-105 mb-8 lg:mb-0 lg:mr-4">
        <span className="absolute text-6xl lg:text-8xl left-0 top-0 text-purple-800">"</span>
        <span className="absolute text-2xl  lg:text-4xl center-0 top-0 text-purple-800">Services</span>
        <div className='flex flex-row items-center'>
          <ol className='text-left  '>
            <br/>
           <li className="py-2 pt-2 transition-all duration-300 ease-in-out hover:bg-purple-100">Web & App Developement </li>
            <li className="py-2  transition-all duration-300 ease-in-out hover:bg-purple-100">Restful API Development</li>
            <li className="py-2  transition-all duration-300 ease-in-out hover:bg-purple-100">Data Visualization and Representation</li>
            <li className="py-2  transition-all duration-300 ease-in-out hover:bg-purple-100">Web Accessibility and Compliance</li>
            <li className="py-2  transition-all duration-300 ease-in-out hover:bg-purple-100">Progressive Web App (PWA) Development</li>
          </ol>
        </div>
      </div>

      {/* Our Stacks Circle */}
      <div className='border border-black w-full  lg:w-96 h-full lg:h-96 bg-white rounded-full flex justify-center items-center text-center p-8 shadow-xl relative transition-all duration-500 transform hover:scale-105 lg:ml-4'>
        <span className="absolute text-6xl lg:text-8xl left-0 top-0 text-purple-800">"</span>
        <span className="absolute text-2xl lg:text-4xl mt-4 center-0 top-0 text-purple-800">Our Stacks</span>
        <div className='flex flex-row items-center'>
          <ol className='text-left pt-4'>
             <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">Python</li>
            <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">Javascript</li>
            <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">React.js</li>
            <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">Pandas, Numpy, D3.js, Sci.py, Tensorflow, OpenCV</li>
            <li className="py-2 transition-all duration-300 ease-in-out hover:bg-purple-100">Next.js & MERN</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Intersection;
