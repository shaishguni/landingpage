import React from 'react';
import about from '../../../public/about.png'
import Image from 'next/image'
const About = () => {
  return (
    <section id="about" className="  relative pt-36 py-12">
      {/* Irregular shape background */}
      
      {/* Content */}
      <div className=" about container mx-auto relative z-10 px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            {/* Replace 'your_image_path' with your image file path */}
            <Image
              src={about}
              alt="about image"
              className="rounded-lg  shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-500  mb-4">About us</h2>
            <p className="text-lg  lg:text-xl mb-6">
              Craft Fission is committed to supporting you every step of the way. Our dedicated team is ready to assist you with any queries or assistance you may need regarding our software solutions or services.
              <br/>
              <br/>
              Whether it's troubleshooting, customization, or general inquiries, our support team is just a click away. Feel free to reach out to us via our support portal or contact us directly.
              <br/>
              <br/>
              We believe in delivering not only exceptional software but also exceptional customer service. Your success is our priority, and we're here to ensure you get the most out of our offerings.
              <br/>
              <br/>
Ready to get started or need help? Click below to explore our solutions or contact our support team.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md">
                Get a Quote
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-md">
                Book a meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
