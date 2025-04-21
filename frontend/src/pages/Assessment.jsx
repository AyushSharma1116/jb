import React, { useState } from "react";

// Grouped questions by skill
const questions = [
  {
    category: "AI",
    q: "What is machine learning?",
    options: ["Cooking method", "AI technique", "UI style", "Database query"],
    correct: 1,
  },
  {
    category: "AI",
    q: "Which language is widely used in AI?",
    options: ["HTML", "Python", "CSS", "Excel"],
    correct: 1,
  },
  {
    category: "Web Development",
    q: "What does HTML stand for?",
    options: [
      "Hyper Trainer Markup Language",
      "Hyper Text Markup Language",
      "Hot Mail",
      "How To Make Lasagna",
    ],
    correct: 1,
  },
  {
    category: "Database",
    q: "What is SQL used for?",
    options: [
      "Styling websites",
      "Data manipulation",
      "Machine learning",
      "File storage",
    ],
    correct: 1,
  },
];

const Assessment = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const current = questions[step];

  const handleAnswer = (i) => {
    setSelected(i);
    setShowFeedback(true);
    if (i === current.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowFeedback(false);
    setStep(step + 1);
  };

  if (step >= questions.length) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-blue-100 via-indigo-800 to-purple-900 text-white px-4">
        <div className="bg-white text-gray-800 rounded-xl shadow-xl p-10 max-w-md w-full text-center">
          <h1 className="text-3xl font-bold mb-4">Assessment Complete!</h1>
          <p className="text-lg">
            You scored{" "}
            <span className="text-indigo-600 font-bold">{score}</span> out of{" "}
            {questions.length}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400 text-white px-4">
      <div className="bg-sky-200 text-blue-700 rounded-xl shadow-xl p-8 max-w-xl w-full">
        <h2 className="text-lg text-blue-800 font-semibold mb-2">
          Category: {current.category}
        </h2>
        <h3 className="text-2xl font-bold mb-6 text-blue-900">{current.q}</h3>
        <div className="space-y-3">
          {current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={showFeedback}
              className={`w-full px-4 py-2 rounded-md shadow transition duration-300 ${
                selected === i
                  ? i === current.correct
                    ? "bg-green-100 border border-green-500"
                    : "bg-red-100 border border-red-500" 
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className="mt-6 text-center">
            {selected === current.correct ? (
              <p className="text-green-600 font-semibold">Correct! 🎉</p>
            ) : (
              <p className="text-red-600 font-semibold">
                Oops! The correct answer was:{" "}
                <span className="underline">
                  {current.options[current.correct]}
                </span>
              </p>
            )}
            <button
              onClick={handleNext}
              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition duration-300"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
