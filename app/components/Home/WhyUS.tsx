import Image from "next/image"
import img2 from '../../../public/img2.jpg'

const WhyUS = () => {
  return (
    <div className=" pb-12 pt-12">
         <div className=' pb-6'>
            <h1 className="italic text-2xl ">WHY US? </h1>
          </div>
        <section className="flex pb-60  pt-0 flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-8 py-8">
        
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl text-indigo-500 font-bold mb-6 lg:mb-12">Craft Fission</h1>
          <p className="text-lg lg:w-3/4 mx-auto lg:mx-0 mb-8">
            Embark on a Digital Odyssey with Craft Fission: Where Software Solutions Transcend Expectations. Journey through innovation and redefine possibilities with our transformative SaaS services. Let's pioneer the future of your business, together!
          </p>
          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
            
          </div>
        </div>
        
        <div className="lg:w-1/2  ">
          <Image src={img2} alt="home image" width={500} height={450} layout='responsive' className="rounded-lg w-full h-full bg-cover bg-center  shadow-lg" />
        </div>
      </section>
    </div>
  )
}

export default WhyUS