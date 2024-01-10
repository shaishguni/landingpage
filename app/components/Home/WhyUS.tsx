import Image from "next/image"
import home from '../../../public/home.png'

const WhyUS = () => {
  return (
    <div className=" pb-12 pt-12" id="whyus">
         <div className=' pb-6'>
            <h1 className="italic text-2xl ">WHY US? </h1>
          </div>
        <section className="flex pb-60  pt-0 flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-8 py-8">
        
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl text-indigo-500 font-bold mb-6 lg:mb-12">Our team assists you in creating a strong digital presence</h1>
          <p className="text-lg  text-left lg:w-3/4 mx-auto lg:mx-0 mb-8">
            Choose us for unmatched expertise in website sales. We excel in maximizing value, ensuring top-dollar deals with a swift, streamlined process. Our personalized approach and vast buyer network translate your digital asset into lucrative success. Partner with us for unparalleled results in website sales.
          </p>
         
        </div>
        
        <div className="lg:w-1/2  ">
          <Image src={home} alt="home image" width={500} height={450} layout='responsive' className="rounded-lg w-full h-full bg-cover bg-center  shadow-lg" />
        </div>
      </section>
    </div>
  )
}

export default WhyUS