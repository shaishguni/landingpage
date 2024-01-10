import reachme from '../../../public/reachme.png';


const Portfolio = () => {
  const portfolioItems = [
    { 
      id: 1, 
      title: "Reach Me", 
      description: "A previously made startup by us.",
      imageUrl:"https://raw.githubusercontent.com/shaishguni/landingpage/master/public/reachme.png",
    },
    { 
      id: 2, 
      title: "React Dictonary", 
      description: "An API based react dictonary",
      imageUrl: "https://raw.githubusercontent.com/shaishguni/landingpage/master/public/reactdict.png"
    },
    
  ];

  return (
    <div className="container  mx-auto px-4 pb-8 mb-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Our Portfolio</h1>
          <p className="text-lg mt-2">A brief showcase of our amazing work</p>
        </div>
      
      </div>
      <div className="md:w-1/2 md:pl-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {portfolioItems.map(item => (
            <div key={item.id} className="shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-100 rounded-lg p-4 flex flex-col items-center">
              <img src={item.imageUrl} alt={item.title} className="w-32 transition-all duration-300 ease-in-out hover:bg-purple-100 h-32 mb-4 rounded object-cover"/>
              <h2 className="text-2xl transition-all duration-300 ease-in-out hover:bg-purple-100 font-semibold">{item.title}</h2>
              <p className="mt-2 transition-all duration-300 ease-in-out hover:bg-purple-100 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
