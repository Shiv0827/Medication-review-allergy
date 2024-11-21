import React from 'react';
import Footer from './Footer'; // Adjust the path if Footer is located elsewhere

const ConditionsPage = () => {
  const symptomsData = [
    { symptom: 'Sneezing', description: 'An involuntary reaction to allergens like pollen, dust, or pet dander.' },
    { symptom: 'Runny Nose (Rhinorrhea)', description: 'Excessive watery nasal discharge, often seen in allergic rhinitis.' },
    { symptom: 'Itchy Skin', description: 'Generalized itching that is not caused by an external factor, often due to allergic reactions to certain foods, medications, or environmental allergens.' },
    { symptom: 'Rash on Skin (Contact Dermatitis)', description: 'Red, inflamed skin that occurs after contact with an allergen such as poison ivy, certain metals (nickel), or some cosmetics.' },
    { symptom: 'Chest Tightness', description: 'A feeling of pressure or tightness in the chest, often associated with allergic asthma or respiratory allergies.' },
    { symptom: 'Increased Mucus Production', description: 'Excessive mucus production in the nose or throat, commonly triggered by environmental allergens.' },
    { symptom: 'Fever', description: 'Occasionally seen with allergies, particularly if there is a secondary bacterial infection due to nasal congestion or sinusitis.' },
    { symptom: 'Sleep Disturbances', description: 'Difficulty falling asleep or staying asleep due to symptoms such as nasal congestion, coughing, or wheezing from allergies.' },
    { symptom: 'Severe Anaphylaxis', description: 'A life-threatening reaction that includes swelling of the throat, difficulty breathing, a drop in blood pressure, and potentially death. Requires immediate medical attention.' },
    { symptom: 'Itchy Skin', description: 'Generalized itching that is not caused by an external factor, often due to allergic reactions to certain foods, medications, or environmental allergens.' },
{ symptom: 'Rash on Skin (Contact Dermatitis)', description: 'Red, inflamed skin that occurs after contact with an allergen such as poison ivy, certain metals (nickel), or some cosmetics.' },
{ symptom: 'Chest Tightness', description: 'A feeling of pressure or tightness in the chest, often associated with allergic asthma or respiratory allergies.' },
{ symptom: 'Increased Mucus Production', description: 'Excessive mucus production in the nose or throat, commonly triggered by environmental allergens, making it harder to breathe or speak.' },
{ symptom: 'Fever', description: 'Occasionally seen with allergies, particularly if there is a secondary bacterial infection due to nasal congestion or sinusitis.' },
{ symptom: 'Ear Congestion', description: 'Blocked or muffled ears caused by allergic rhinitis or sinus infections, leading to discomfort or a feeling of fullness in the ears.' },
{ symptom: 'Sore Throat', description: 'Inflammation or irritation in the throat caused by post-nasal drip, often seen in people with allergies.' },
{ symptom: 'Dry Mouth', description: 'Reduced saliva production, often caused by breathing through the mouth due to nasal congestion from allergies.' },
{ symptom: 'Sleep Disturbances', description: 'Difficulty falling asleep or staying asleep due to symptoms such as nasal congestion, coughing, or wheezing from allergies.' },
{ symptom: 'Swollen Lymph Nodes', description: 'Enlargement of lymph nodes, especially in the neck or underarms, in response to an allergic reaction or infection triggered by allergens.' },
{ symptom: 'Asthma Exacerbation', description: 'A worsening of asthma symptoms, such as increased wheezing, coughing, and shortness of breath, often triggered by environmental allergens like pollen, dust, or smoke.' },
{ symptom: 'Difficulty Swallowing', description: 'Caused by a reaction that leads to throat swelling, often a sign of a severe allergic reaction (anaphylaxis).' },
{ symptom: 'Severe Anaphylaxis', description: 'A life-threatening reaction that includes swelling of the throat, difficulty breathing, a drop in blood pressure, and potentially death. Requires immediate medical attention.' },
    
];

  const sliderData = [
    {
      category: 'Skin Symptoms',
      symptoms: [
        { symptom: 'Hives (Urticaria)', description: 'Raised, itchy welts on the skin.' },
        { symptom: 'Eczema', description: 'Dry, itchy, inflamed patches of skin.' },
        { symptom: 'Redness', description: 'Skin turns red due to irritation.' },
      ],
    },
    {
      category: 'Respiratory Symptoms',
      symptoms: [
        { symptom: 'Sneezing', description: 'Forceful expulsion of air through the nose.' },
        { symptom: 'Shortness of Breath', description: 'Difficulty or labored breathing.' },
        { symptom: 'Coughing', description: 'Persistent or frequent coughing.' },
      ],
    },
    {
      category: 'Gastrointestinal Symptoms',
      symptoms: [
        { symptom: 'Abdominal Pain', description: 'Cramping, discomfort, or soreness in the abdomen.' },
        { symptom: 'Nausea', description: 'Feeling of queasiness or urge to vomit.' },
        { symptom: 'Diarrhea', description: 'Frequent, loose, or watery stools.' },
      ],
    },
    {
        category: 'Cardiovascular Symptoms',
        symptoms: [
          { symptom: 'Rapid heart rate (Tachycardia)', description: 'Increased heart rate above normal levels.' },
          { symptom: 'Low blood pressure (Hypotension)', description: 'Feeling faint, dizziness, or lightheaded.' },
          { symptom: 'Irregular heartbeat (Arrhythmia)', description: 'Unsteady or abnormal heartbeats.' },
        ],
      },
      {
        category: 'Eye Symptoms',
        symptoms: [
          { symptom: 'Itchy eyes', description: 'Persistent itchiness in the eye area.' },
          { symptom: 'Watery eyes', description: 'Excessive tearing or crying.' },
          { symptom: 'Red or bloodshot eyes', description: 'Eyes appearing pink or red due to irritation.' },
          { symptom: 'Puffy or swollen eyelids', description: 'Swelling around the eyes, often in the morning.' },
        ],
      },
      {
        category: 'General Symptoms',
        symptoms: [
          { symptom: 'Fatigue', description: 'Generalized tiredness or lack of energy.' },
          { symptom: 'Headache', description: 'Pain or pressure in the head or temples.' },
          { symptom: 'Fever', description: 'Elevated body temperature (often mild).' },
        ],
      },
      {
        category: 'Severe (Anaphylactic) Symptoms',
        symptoms: [
          { symptom: 'Difficulty breathing', description: 'Inability to take in enough air.' },
          { symptom: 'Tightness in the throat', description: 'Swelling or constriction of the throat.' },
          { symptom: 'Swelling of the face, lips, or tongue', description: 'Rapid, severe swelling in the facial area.' },
          { symptom: 'Loss of consciousness', description: 'Fainting or becoming unresponsive.' },
        ],
      },
      
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-navy-900 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Allergy Symptoms and Descriptions</h1>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {/* Symptoms Table */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Common Symptoms</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-md">
              <thead className="bg-blue-600 text-white sticky top-0">
                <tr>
                  <th className="py-2 px-4 text-left font-semibold">Symptom</th>
                  <th className="py-2 px-4 text-left font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {symptomsData.map((symptom, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                    <td className="py-2 px-4 border-b border-gray-300">{symptom.symptom}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{symptom.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Slider Section */}
        <section className="mt-10">
  <h2 className="text-2xl font-bold mb-4">Categorized Symptoms</h2>
  <div className="overflow-x-auto flex space-x-4">
    {sliderData.map((category, idx) => (
      <div
        key={idx}
        className="flex-shrink-0 bg-white border border-gray-300 rounded-md shadow-md w-80 p-4"
      >
        <h3 className="text-xl font-bold mb-2">{category.category}</h3>
        <ul className="space-y-2">
          {category.symptoms.map((symptom, subIdx) => (
            <li key={subIdx}>
              <strong>{symptom.symptom}: </strong>
              <span>{symptom.description}</span>
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

export default ConditionsPage;
