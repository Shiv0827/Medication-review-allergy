import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-blue-900 mb-6">
            Allergies Resource Center
          </h1>
          <p className="text-xl text-gray-700">
            Tools, resources, and support for living well with allergies.
          </p>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1000')] 
                      bg-cover bg-center opacity-20"></div>
      </div>
    </div>
  );
};

export default Hero;