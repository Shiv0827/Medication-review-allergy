import React from 'react';

interface ContentSectionProps {
  number: number;
  total: number;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const ContentSection = ({
  number,
  total,
  title,
  description,
  children
}: ContentSectionProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <span className="text-sm font-medium text-blue-600">
            {number} OF {total}
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">{title}</h2>
          {description && (
            <p className="mt-4 text-lg text-gray-600">{description}</p>
          )}
        </div>
        <div className="prose max-w-none">{children}</div>
      </div>
    </section>
  );
};

export default ContentSection;