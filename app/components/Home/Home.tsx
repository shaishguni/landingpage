'use client'
import Image from 'next/image';
import Link from 'next/link';
import About from './About';
import img2 from '../../../public/img2.jpg';
import Video from './Video';
import Stacks from './Stacks';
import Services from './Services'
import WhyUS from './WhyUS';
import Portfolio from './Portfolio';
import Contact from './Contact'


const Home = () => {
  return (
    <div>
      <section className="flex pt-36 flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-8 py-8">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
         
          <h1 className="text-3xl lg:text-5xl text-indigo-500 font-bold mb-6 lg:mb-12">Craft Fission</h1>
          <p className="text-lg lg:w-3/4 mx-auto lg:mx-0 mb-8">
            Embark on a Digital Odyssey with Craft Fission: Where Software Solutions Transcend Expectations. Journey through innovation and redefine possibilities with our transformative SaaS services. Let's pioneer the future of your business, together!
          </p>
          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <Link href='/get-started'>
              <p className='bg-green-600 hover:bg-indigo-500 transition duration-300 ease-in-out text-white font-semibold px-4 py-2 rounded-md scroll-m-0'>
                Make a website in 30$
              </p>
            </Link>
            <Link href='/get-started'>
              <p className='bg-blue-600 hover:bg-rose-500 transition duration-300 ease-in-out text-white font-semibold px-4 py-2 rounded-md'>
                Get started with Next.js
              </p>
            </Link>
          </div>
        </div>
        
        <div className="lg:w-1/2 ">
          <Image src={img2} alt="home image" width={500} height={450} layout='responsive' className="rounded-lg w-full h-full bg-cover bg-center  shadow-lg" />
        </div>
      </section>

      <section>
        <About />
      </section>
      {/* <section>
        <Video/>
      </section> */}
      {/* <section>
        <Stacks/>
      </section> */}
      <section >
        <Services/>
      </section>
      <section>
        <WhyUS/>
      </section>
      <section>
        <Portfolio/>
      </section>
      <section>
        <Contact/>
      </section>
    </div>

  );
};

export default Home;
