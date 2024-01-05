import React from 'react';

const Stacks = () => {
  const stacks = [
    {
      name: 'Next.js',
      imageUrl: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
      description: 'Next.js  is a React framework enabling functionalities like server-side rendering and static site generation.',
    },
    {
      name: 'React.js',
      imageUrl: 'https://solidstudio.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flofvu8al%2Fproduction%2F39d6cef5649ed5c35b1420198a362baf1bff97a6-1280x939.jpg&w=1080&q=75',
      description: 'React.js is a JavaScript library for building user interfaces, known for its component-based architecture.',
    },
    {
      name: 'MERN Stack',
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*AWOohKIQ_FGJrIb6VNKsdA.jpeg',
      description: 'MERN stack includes MongoDB, Express.js, React.js, and Node.js for full-stack web development.',
    },
    {
      name: 'Django',
      imageUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20200210175202/django-basics.png',
      description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    },
    {
      name: 'Django with React',
      imageUrl: 'data:image/png;base64,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',
      description: `
      
      Combining Django, a powerful Python web framework, with React.js for interactive UIs.`,
    },
    {
      name: 'Mobile Development',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZUepgPigQRXVZbErK25yJFW_wK3mFIHhSgQ&usqp=CAU',
      description: 'Development of mobile applications for iOS and Android platforms using technologies like React Native, Flutter, and native development tools.',
    },
    {
      name: 'Data & ML Services',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXKyUkxTph5E-xkLEjuFMLe5AZpBQirY5WwA&usqp=CAU',
      description: 'Offering data science and machine learning services to extract insights and build intelligent solutions.',
    },
  ];

  return (
    <div className=" pt-12 py-12">
      <h2 className="text-6xl font-extrabold text-center mb-12 text-indigo-800">Our  Stack</h2>

      <div className="container mx-auto px-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stacks.map((stack, index) => (
          <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
            <div className="w-full h-48 bg-cover bg-center" style={{ backgroundImage: `url(${stack.imageUrl})` }}></div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{stack.name}</h3>
              <p className="text-gray-700 text-sm group-hover:text-gray-600 transition duration-300">{stack.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stacks;
