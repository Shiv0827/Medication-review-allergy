import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Section {
  title: string;
  description?: string;
  content: React.ReactNode;
  illustration: string;
}

interface ContentSliderProps {
  sections: Section[];
}

const ContentSlider = ({ sections }: ContentSliderProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <div className="relative min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="relative">
          {/* Section indicator */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <span className="text-sm font-medium text-blue-600">
                {currentIndex + 1} OF {sections.length}
              </span>
              <span className="mx-2 text-gray-400">/</span>
              <span className="uppercase text-gray-900 font-semibold">
                {sections[currentIndex].title}
              </span>
            </div>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              View All
            </a>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
            aria-label="Previous section"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 z-10"
            aria-label="Next section"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                    style={{ minWidth: '100%' }}
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      {/* Left side - Illustration */}
                      <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg overflow-hidden">
                        <img
                          src={section.illustration}
                          alt={section.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Right side - Content */}
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">
                            {section.title}
                          </h2>
                          {section.description && (
                            <p className="mt-4 text-lg text-gray-600">
                              {section.description}
                            </p>
                          )}
                        </div>
                        <div className="prose max-w-none">{section.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSlider;