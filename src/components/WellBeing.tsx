import React from 'react';
import Footer from './Footer'; // Adjust path as needed for Footer component

const WellBeingPage = () => {
  const wellBeingData = [
    {
      category: 'Skin Symptoms',
      symptoms: [
        { symptom: 'Hives (Urticaria)', description: 'Raised, itchy welts on the skin', precaution: 'Apply antihistamine cream or take oral antihistamines.' },
        { symptom: 'Redness', description: 'Skin turns red due to irritation', precaution: 'Use a soothing moisturizer or aloe vera gel.' },
        { symptom: 'Rash', description: 'Generalized skin irritation, often itchy', precaution: 'Avoid irritants and apply hydrocortisone cream.' },
        { symptom: 'Itching', description: 'Sensation that makes you want to scratch', precaution: 'Apply cool compresses and avoid scratching.' },
        { symptom: 'Swelling (Edema)', description: 'Puffiness or enlargement of skin or tissues', precaution: 'Elevate the affected area and use cold packs.' },
        { symptom: 'Blisters', description: 'Fluid-filled bumps on the skin', precaution: 'Avoid popping blisters; cover with a clean bandage.' },
        { symptom: 'Dry skin', description: 'Skin becomes rough, flaky, or cracked', precaution: 'Use a heavy-duty moisturizer frequently.' },
        { symptom: 'Eczema (Atopic Dermatitis)', description: 'Dry, itchy, inflamed patches of skin', precaution: 'Apply prescription creams and avoid triggers.' },
        { symptom: 'Contact dermatitis', description: 'Rash or inflammation from skin contact with allergen', precaution: 'Wash the area and avoid contact with the allergen.' },
        { symptom: 'Sunburn-like symptoms', description: 'Redness or swelling triggered by sunlight (sun allergy)', precaution: 'Apply sunscreen and avoid direct sunlight.' },
      ],
    },
    {
      category: 'Respiratory Symptoms',
      symptoms: [
        { symptom: 'Sneezing', description: 'Forceful expulsion of air through the nose', precaution: 'Use a saline nasal spray or antihistamines.' },
        { symptom: 'Runny nose (Rhinorrhea)', description: 'Excessive mucus production from the nose', precaution: 'Use decongestants or nasal sprays.' },
        { symptom: 'Stuffy nose (Nasal congestion)', description: 'Blockage or swelling of nasal passages', precaution: 'Try steam inhalation or nasal decongestants.' },
        { symptom: 'Coughing', description: 'Persistent or frequent coughing', precaution: 'Drink warm fluids and use cough suppressants if necessary.' },
        { symptom: 'Wheezing', description: 'High-pitched sound during exhalation', precaution: 'Use a bronchodilator inhaler or seek medical advice.' },
        { symptom: 'Shortness of breath', description: 'Difficulty or labored breathing', precaution: 'Avoid exertion and use prescribed inhalers.' },
        { symptom: 'Post-nasal drip', description: 'Mucus dripping down the back of the throat', precaution: 'Drink warm fluids and use a saline nasal spray.' },
      ],
    },
    {
      category: 'Gastrointestinal Symptoms',
      symptoms: [
        { symptom: 'Abdominal pain', description: 'Cramping, discomfort, or soreness in the abdomen', precaution: 'Avoid triggering foods and take antacids if appropriate.' },
        { symptom: 'Diarrhea', description: 'Frequent, loose, or watery stools', precaution: 'Stay hydrated and avoid solid foods temporarily.' },
        { symptom: 'Nausea', description: 'Feeling of queasiness or urge to vomit', precaution: 'Sip ginger tea or take anti-nausea medication.' },
        { symptom: 'Vomiting', description: 'Forceful expulsion of stomach contents', precaution: 'Rehydrate with oral rehydration solutions.' },
        { symptom: 'Bloating', description: 'Feeling of fullness or distension in the abdomen', precaution: 'Avoid carbonated drinks and chew food slowly.' },
      ],
    },
    {
      category: 'Severe (Anaphylactic) Symptoms',
      symptoms: [
        { symptom: 'Difficulty breathing', description: 'Inability to take in enough air', precaution: 'Use an epinephrine auto-injector and seek emergency help.' },
        { symptom: 'Tightness in the throat', description: 'Swelling or constriction of the throat', precaution: 'Administer epinephrine and go to the ER immediately.' },
        { symptom: 'Swelling of the face, lips, or tongue', description: 'Rapid, severe swelling in the facial area', precaution: 'Use epinephrine and seek immediate medical care.' },
      ],
    },
  ];

  const sliderData = [
    {
      category: 'Gut Health and Allergies',
      symptoms: [
        { symptom: 'Immune System Modulation', description: 'Balanced gut microbiota prevents overactive immune responses like allergies.' },
        { symptom: 'Leaky Gut Syndrome', description: 'Increased intestinal permeability allows allergens and toxins to enter the bloodstream, triggering inflammation.' },
        { symptom: 'Inflammation', description: 'Unhealthy gut promotes chronic inflammation, worsening allergy symptoms.' },
        { symptom: 'Gut-Skin Axis', description: 'Dysbiosis links to inflammatory skin conditions like eczema and hives.' },
      ],
    },
    {
      category: 'Types of Gut Health',
      symptoms: [
        { symptom: 'Balanced Gut Health', description: 'Regular bowel movements, minimal bloating, good energy.' },
        { symptom: 'Dysbiosis (Imbalanced Gut)', description: 'Gas, bloating, diarrhea, constipation, and food intolerances.' },
        { symptom: 'Leaky Gut', description: 'Food sensitivities, skin issues, fatigue, and brain fog.' },
        { symptom: 'Slow Gut Motility', description: 'Constipation, bloating, feeling full quickly.' },
        { symptom: 'Hyperactive Gut (Fast Motility)', description: 'Frequent diarrhea, malabsorption, dehydration.' },
      ],
    },
    {
      category: 'Improving and Maintaining Gut Health',
      symptoms: [
        { symptom: 'Balanced Diet', description: 'Whole foods rich in fiber, vitamins, and anti-inflammatory properties.' },
        { symptom: 'Probiotics and Prebiotics', description: 'Fermented foods or supplements with beneficial bacteria and prebiotic fibers.' },
        { symptom: 'Stress Management', description: 'Mindfulness, yoga, or deep breathing improves gut health.' },
        { symptom: 'Sleep', description: 'Quality sleep helps maintain circadian rhythms and gut microbiota.' },
        { symptom: 'Avoid Triggers', description: 'Eliminate allergens or intolerances like gluten and dairy.' },
      ],
    },
    {
      category: 'Specific Diets for Gut Health',
      symptoms: [
        { symptom: 'Mediterranean Diet', description: 'Fruits, vegetables, whole grains, and healthy fats for microbiome diversity.' },
        { symptom: 'Low-FODMAP Diet', description: 'Reduces fermentable sugars to help IBS and bloating.' },
        { symptom: 'Anti-Inflammatory Diet', description: 'Omega-3s, antioxidants, and reduced refined carbs.' },
        { symptom: 'Elimination Diet', description: 'Identifies triggers by temporarily removing allergens.' },
        { symptom: 'High-Fiber Diet', description: 'Encourages regular bowel movements and supports microbiota.' },
      ],
    },
  ];
  

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-navy-900 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Well-Being and Precautions</h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <section>
          {wellBeingData.map((category, idx) => (
            <div key={idx} className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-md">
                  <thead className="bg-blue-600 text-white sticky top-0">
                    <tr>
                      <th className="py-2 px-4 text-left font-semibold">Symptom</th>
                      <th className="py-2 px-4 text-left font-semibold">Description</th>
                      <th className="py-2 px-4 text-left font-semibold">Precaution/Relief</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.symptoms.map((symptom, subIdx) => (
                      <tr key={subIdx} className={`${subIdx % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                        <td className="py-2 px-4 border-b border-gray-300">{symptom.symptom}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{symptom.description}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{symptom.precaution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>

        {/* Scrollable Section */}
        
    <section className="mt-10">
    <h2 className="text-2xl font-bold mb-4">Gut Health Insights</h2>
    <div className="flex justify-center flex-wrap gap-6">
      {sliderData.map((category, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-300 rounded-md shadow-md w-80 p-4"
        >
          <h3 className="text-xl font-bold mb-2">{category.category}</h3>
          <ul className="list-disc pl-4">
            {category.symptoms.map((symptom, subIdx) => (
              <li key={subIdx} className="mb-2">
                <strong>{symptom.symptom}: </strong>
                <span className="text-gray-700">{symptom.description}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
  

      </main>

      <Footer />
    </div>
  );
};

export default WellBeingPage;
