'use client'

import home from '../../../public/home.png';
import Image from 'next/image';
import Link from 'next/link';
import About from './About';

const Home = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12 lg:py-24">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4">
          <section className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl text-indigo-600 font-bold mb-6">Craft Fission</h1>
            <p className="text-gray-700 mb-6">Embark on a Digital Odyssey with Craft Fission: Where Software Solutions Transcend Expectations. Journey through innovation and redefine possibilities with our transformative SaaS services. Let's pioneer the future of your business, together!</p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href='/get-started'>
                <p className='bg-green-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300 cursor-pointer'>
                  Make a website in 30$
                </p>
              </Link>
              <Link href='/get-started'>
                <p className='bg-blue-600 hover:bg-rose-500 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300 cursor-pointer'>
                  Get started with Next.js
                </p>
              </Link>
            </div>
          </section>
          
          <div className="lg:w-1/2 h-72 lg:h-auto relative">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
              <Image src={home} alt="home image" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <About />
      </section>
    </div>
  );
}

export default Home;
