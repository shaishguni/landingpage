import reachme from '../../../public/reachme.png';


const Portfolio = () => {
  const portfolioItems = [
    { 
      id: 1, 
      title: "Reach Me", 
      description: "A previously made startup by us.",
      imageUrl:"../../../public/reachme.png",
    },
    { 
      id: 2, 
      title: "Project 2", 
      description: "Description of project 2.",
      imageUrl: "https://via.placeholder.com/150"
    },
    { 
      id: 3, 
      title: "Project 3", 
      description: "Description of project 3.",
      imageUrl: "https://via.placeholder.com/150"
    },
    { 
      id: 4, 
      title: "Project 4", 
      description: "Description of project 4.",
      imageUrl: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="container mx-auto px-4 pb-8 mb-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Our Portfolio</h1>
          <p className="text-lg mt-2">A brief showcase of our amazing work</p>
        </div>
      
      </div>
      <div className="md:w-1/2 md:pl-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {portfolioItems.map(item => (
            <div key={item.id} className="shadow-lg rounded-lg p-4 flex flex-col items-center">
              <img src={item.imageUrl} alt={item.title} className="w-32 h-32 mb-4 rounded object-cover"/>
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
