import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentSlider from './components/ContentSlider';
import Footer from './components/Footer';
import Conditions from './components/Conditions'; // Update the path if necessary
import WellBeingPage from './components/WellBeing';
import AskQuestion from './components/AskQuestion'; // Import AskQuestion component

const sections = [
  {
    title: 'What is an Allergy?',
    description: 'This article explains the basics of an allergic reaction. Learn what happens when your immune system goes on high alert.',
    illustration: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=1000',
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Who Gets Allergies?</h3>
          <p className="mt-2 text-gray-600">Anyone can get them, at any age. You could develop them as a child, or you might not have any symptoms until you're an adult.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">What Causes an Allergic Reaction?</h3>
          <p className="mt-2 text-gray-600">While your problem may seem to start in the nose or the eyes, allergies actually come from an immune system run wild.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Allergies and Asthma</h3>
          <p className="mt-2 text-gray-600">Worsening of asthma symptoms can be triggered by allergies, which can temporarily increase the inflammation of the airways.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Symptoms & Types',
    illustration: 'https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=1000',
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Spring Allergies</h3>
          <p className="mt-2 text-gray-600">Tree pollen is the most common trigger during spring months.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Summer Allergies</h3>
          <p className="mt-2 text-gray-600">Grass and weed pollen are the main culprits during summer.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Fall Allergies</h3>
          <p className="mt-2 text-gray-600">Ragweed pollen and mold spores are common autumn triggers.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Winter Allergies</h3>
          <p className="mt-2 text-gray-600">Indoor allergens like dust mites and pet dander are winter concerns.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Tests & Diagnosis',
    illustration: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000',
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Finding the Cause of Allergies</h3>
          <p className="mt-2 text-gray-600">Your doctor will start with a detailed medical history and physical examination.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">When to See an Allergist</h3>
          <p className="mt-2 text-gray-600">Consider seeing an allergist if your symptoms are severe or persistent.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Allergy Skin Test</h3>
          <p className="mt-2 text-gray-600">A common diagnostic tool that involves exposing your skin to potential allergens.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Blood Test for Allergies</h3>
          <p className="mt-2 text-gray-600">Measures your immune system's response to specific allergens.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Treatment',
    illustration: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000',
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Types of Allergy Drugs</h3>
          <p className="mt-2 text-gray-600">Various medications are available to treat different types of allergies.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">What Are Antihistamines?</h3>
          <p className="mt-2 text-gray-600">These medications block histamine, reducing allergy symptoms.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">How Decongestants Work</h3>
          <p className="mt-2 text-gray-600">They help relieve nasal congestion by reducing swelling in blood vessels.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Nasal Sprays for Allergies</h3>
          <p className="mt-2 text-gray-600">Different types of nasal sprays can help manage allergy symptoms.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Appointment Prep',
    illustration: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000',
    content: (
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Questions About Chronic Sinusitis With Nasal Polyps</h3>
          <p className="mt-2 text-gray-600">Important questions to ask your doctor about managing chronic sinusitis and nasal polyps.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Questions About Your Child's Food Allergies</h3>
          <p className="mt-2 text-gray-600">Essential questions to discuss with your doctor regarding your child's food allergies.</p>
        </div>
      </div>
    ),
  },
];

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-20">
        <Routes>
          {/* Main Route */}
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <ContentSlider sections={sections} />
                <Footer />
              </div>
            }
          />
          {/* Other Routes */}
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/well-being" element={<WellBeingPage />} />
          
          {/* AskQuestion Route */}
          <Route path="/ask-question" element={<AskQuestion />} /> {/* Added AskQuestion route */}

        </Routes>
      </main>
    </Router>
  );
};

export default App;
