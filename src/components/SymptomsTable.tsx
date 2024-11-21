import React from 'react';

interface Symptom {
  name: string;
  description: string;
}

interface SymptomCategory {
  title: string;
  symptoms: Symptom[];
}

const symptomsData: SymptomCategory[] = [
  {
    title: 'Skin Symptoms',
    symptoms: [
      { name: 'Hives (Urticaria)', description: 'Raised, itchy welts on the skin' },
      { name: 'Redness', description: 'Skin turns red due to irritation' },
      // Add more symptoms as needed
    ]
  },
  // Add more categories as needed
];

const SymptomsTable = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-6">
        Comprehensive List of Allergy Symptoms
      </h2>
      
      {symptomsData.map((category, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            {category.title}
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-sm rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Symptom
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {category.symptoms.map((symptom, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {symptom.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {symptom.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SymptomsTable;