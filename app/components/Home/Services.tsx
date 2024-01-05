
const Services = () => {
  const services = [
    {
      title: 'Full-stack MERN Application Development',
      description: 'Building robust and scalable web applications using the MERN stack - MongoDB, Express.js, React.js, and Node.js.',
    },
    {
      title: 'React Native Mobile App Development',
      description: 'Crafting cross-platform mobile applications for iOS and Android using React Native for a seamless user experience.',
    },
    {
      title: 'Django RESTful API Development',
      description: 'Creating RESTful APIs using Django, enabling efficient communication between web or mobile applications and servers.',
    },
    {
      title: 'Serverless Web Application Development',
      description: 'Developing web applications using serverless architecture for enhanced scalability, reduced maintenance, and cost-effectiveness.',
    },
    {
      title: 'Data Visualization and Dashboard Development',
      description: 'Visualizing complex data sets and crafting interactive dashboards for insightful data analysis and decision-making.',
    },
    {
      title: 'Web Accessibility and Compliance',
      description: 'Ensuring web applications meet accessibility standards, providing an inclusive user experience for all users.',
    },
    {
      title: 'Progressive Web App (PWA) Development',
      description: 'Building progressive web apps that offer a native app-like experience, ensuring reliability and engagement.',
    },
  ];

  return (
    <div className=" py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-indigo-500">Our Services</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className=" rounded-lg shadow-lg bg-white p-6 hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-3 text-black">{service.title}</h3>
              <p className="text-black">{service.description}</p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Services;
