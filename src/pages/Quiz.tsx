import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';

const questions = [
  {
    question: "What is the mean of the data set [65, 59, 80, 81, 56, 55, 40]?",
    options: ["62.43", "70.86", "65.71", "60.29"],
    correct: "62.43",
  },
  {
    question: "Which of the following is a measure of central tendency?",
    options: ["Mean", "Variance", "Standard Deviation", "Range"],
    correct: "Mean",
  },
  {
    question: "What does a pie chart represent?",
    options: ["Distribution", "Relationship", "Comparison", "Composition"],
    correct: "Composition",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleAnswerOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setSelectedOption(null);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
  };

  return (
    <div className="min-h-screen bg-lightyellow flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-3xl font-merriweather mb-8">クイズページ</h1>
      {showScore ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-poppins mb-4">Your Score: {score} / {questions.length}</h2>
          <button onClick={handleRestartQuiz} className="m-2 p-2 bg-blue-500 text-white rounded">Restart Quiz</button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-poppins mb-4">{questions[currentQuestion].question}</h2>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                  className={`p-2 border ${selectedOption === option ? 'border-blue-500' : 'border-gray-300'} rounded`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleNextQuestion}
            className="m-2 p-2 bg-green-500 text-white rounded"
            disabled={!selectedOption}
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
