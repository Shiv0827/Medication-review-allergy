import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Footer from './Footer'; // Import Footer component

const CLAUDE_API_URL = 'https://api.anthropic.com/v1/claude/generate'; // Example API endpoint
const CLAUDE_API_KEY = import.meta.env.API_KEY; // Replace with your actual API key

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState<string[]>([]);
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const questionsEndRef = useRef<null | HTMLDivElement>(null);

  const predefinedQuestions = [
    {
      question: 'What are the common symptoms of allergies?',
      answer: 'Common symptoms include sneezing, runny nose, itchy eyes, skin rashes, and coughing.',
    },
    {
      question: 'How can I manage my gut health better?',
      answer: 'Eating a balanced diet, staying hydrated, and avoiding processed foods can improve gut health.',
    },
    {
      question: 'What causes food allergies?',
      answer: 'Food allergies occur when the immune system reacts to certain proteins in foods.',
    },
    {
      question: 'Can stress affect allergies?',
      answer: 'Yes, stress can worsen allergy symptoms by lowering the immune system’s ability to fight allergens.',
    },
    {
      question: 'Are probiotics good for gut health?',
      answer: 'Yes, probiotics can help balance the gut bacteria and improve digestion and overall gut health.',
    },
    {
      question: 'What should I avoid if I have a dairy allergy?',
      answer: 'You should avoid all dairy products, including milk, cheese, yogurt, and butter.',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % predefinedQuestions.length);
    }, 3000);

    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim()) {
      setLoading(true);
      setError('');
      setQuestions((prevQuestions) => [...prevQuestions, question]);
      try {
        const response = await axios.post(
          CLAUDE_API_URL,
          {
            prompt: question,
            max_tokens: 100,
          },
          {
            headers: {
              'Authorization': `Bearer ${CLAUDE_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('API response:', response);
        setAnswer(response.data.text); // Adjust based on actual response structure
      } catch (err: any) {
        console.error('Error fetching answer:', err);
        
        if (err.response) {
          console.error('Response data:', err.response.data);
          console.error('Response status:', err.response.status);
          console.error('Response headers:', err.response.headers);
          setError(`Error: ${err.response.status} - ${err.response.data.message || err.response.statusText}`);
        } else if (err.request) {
          console.error('Request data:', err.request);
          setError('No response received from the server. Please check your network connection.');
        } else {
          console.error('Error message:', err.message);
          setError(`Error: ${err.message}`);
        }
        
        setAnswer('');
      } finally {
        setLoading(false);
      }
      setQuestion('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-6 text-blue-600">Ask a Question</h1>

        <div className="mb-4 flex justify-center">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border p-3 w-1/2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your question about allergies or gut health here"
          />
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Asking...' : 'Ask Question'}
          </button>
        </div>

        {error && (
          <div className="mt-4 text-center text-red-500">
            <p>{error}</p>
          </div>
        )}

        {answer && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Answer</h2>
            <div className="p-4 border rounded-lg shadow-lg bg-gray-100">
              <p className="text-md text-gray-700 leading-relaxed">{answer}</p>
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Questions</h2>
          <div className="relative flex items-center justify-center h-64 overflow-hidden">
            {predefinedQuestions.map((item, index) => {
              const isActive = index === currentQuestionIndex;
              const isPrev = index === (currentQuestionIndex - 1 + predefinedQuestions.length) % predefinedQuestions.length;
              const isNext = index === (currentQuestionIndex + 1) % predefinedQuestions.length;

              return (
                <div
                  key={index}
                  className={`absolute transition-transform duration-500 ease-in-out ${
                    isActive ? 'z-20 scale-110 bg-blue-50 p-8 shadow-lg' : isPrev || isNext ? 'z-10 scale-90 opacity-50' : 'z-0 opacity-0'
                  }`}
                  style={{
                    transform: isActive ? 'translateX(0)' : isPrev ? 'translateX(-150%)' : isNext ? 'translateX(150%)' : 'translateX(0)',
                  }}
                >
                  <div className="w-96 border rounded-lg bg-gray-100 p-6">
                    <h3 className="font-bold text-lg text-gray-800 mb-4">Q: {item.question}</h3>
                    <p className="text-md text-gray-700 leading-relaxed">A: {item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {questions.length > 0 && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Recently Asked Questions</h2>
            <div className="overflow-x-auto space-x-4 pb-6 flex items-center justify-center">
              {questions.map((q, index) => (
                <div key={index} className="flex-shrink-0 w-64 p-4 border rounded-lg shadow-lg bg-gray-200">
                  <p className="text-sm text-gray-700">{q}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div ref={questionsEndRef} />
      </div>

      <Footer />
    </div>
  );
};

export default AskQuestion;
