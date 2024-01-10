'use client'
const Footer = () => {
  return (
    <div>
       <footer className=" flex-1 bg-gray-800 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-xl font-bold mb-4">About Us</h5>
            <p className="text-gray-400 text-left">
              We are a team dedicated to bringing you the best in Web/App developement. Our commitment to quality and customer satisfaction makes us a leader in our field.
            </p>
          </div>

          <div className="ml-24">
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul className="text-gray-400">
              <li className="mb-2"><a href="#home" className="hover:text-gray-200 transition duration-300 ease-in-out">Home</a></li>
              <li className="mb-2"><a href="#about" className="hover:text-gray-200 transition duration-300 ease-in-out">About us</a></li>
              <li className="mb-2"><a href="#services" className="hover:text-gray-200 transition duration-300 ease-in-out">Services</a></li>
              <li className="mb-2"><a href="#whyus" className="hover:text-gray-200 transition duration-300 ease-in-out">Why us?</a></li>
            </ul>
          </div>

          <div className="ml-12 ">
            <h5 className="text-xl font-bold  mb-4">Contact Info</h5>
            <ul className="text-gray-400">
              <li className="mb-2 ">Kathmandu,Nepal</li>
              <li className="mb-2">Email:theecraftfusion@gmail.com</li>
              <li className="mb-2">Phone:9849232961</li>
            </ul>
          </div>

          <div>
            {/* <h5 className="text-xl font-bold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out">Instagram</a>
            </div> */}
          </div>
        </div>

        <div className="text-center text-gray-400 pt-10 sm:pt-12 font-light flex items-center justify-center">
          Created by Craft Fission. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer