import React from "react";
import { CheckSquare } from "lucide-react";

const QuizSection = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-start p-4 md:p-10 gap-10">
      {/* Left Side - Quiz Section */}
      <div className="max-w-xl w-full">
        <h1
          className="text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Start Quiz Button
        </h1>
        <p
          className="text-lg mt-2"
          style={{ fontFamily: "Merriweather, serif", fontWeight: 500 }}
        >
          Good Luck
        </p>

        <button
          className="px-5 py-2 mt-3 text-white rounded-md"
          style={{
            background: "linear-gradient(275.76deg, #347928 44.33%, #FCCD2A 98.56%)",
            fontWeight: "400",
          }}
        >
          Start The Quiz
        </button>

        {/* Question Cards */}
        <div className="mt-5 border p-3 rounded-md shadow-md text-sm">
          <p className="flex items-center font-semibold">
            <CheckSquare className="text-green-600 mr-2" /> Which country is known as the Land of the Rising Sun?
          </p>
          <div className="mt-1 space-y-1">
            <p>A) China</p>
            <p>B) South Korea</p>
            <p className="text-yellow-500">C) Japan</p>
          </div>
        </div>

        <div className="mt-3 border p-3 rounded-md shadow-md text-sm">
          <p className="flex items-center font-semibold">
            <CheckSquare className="text-green-600 mr-2" /> Which city is known as the "City of Lights" in Pakistan?
          </p>
          <div className="mt-1 space-y-1">
            <p>A) Lahore</p>
            <p className="text-yellow-500">B) Karachi</p>
            <p>C) Islamabad</p>
          </div>
        </div>

        <button
          className="flex items-center mt-4 px-4 py-2 text-white rounded-md"
          style={{
            background: "linear-gradient(275.76deg, #347928 44.33%, #FCCD2A 98.56%)",
            fontWeight: "400",
          }}
        >
          Next ➜
        </button>
      </div>

      {/* Right Side - Result Section */}
      <div
        className="max-w-lg w-full"
        style={{ marginTop: "4rem" }}
      >
        <h2
          className="text-2xl md:text-2xl font-bold"
          style={{ fontFamily: "Merriweather, serif" }}
        >
          Result
        </h2>
        <p
          className="text-sm mt-2"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          The result section of a quiz on an exams website provides detailed feedback on a user’s performance.
          It typically includes the total score, correct and incorrect answers, and percentage achieved.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex justify-between w-full gap-4">
            <button
              className="px-5 py-2 text-white rounded-md w-[40%]"
              style={{
                background: "linear-gradient(275.76deg, #347928 44.33%, #FCCD2A 98.56%)",
                fontWeight: "400",
              }}
            >
              Check Your Answer
            </button>
            <button
              className="px-5 py-2 text-white rounded-md w-[40%]"
              style={{
                background: "linear-gradient(275.76deg, #347928 44.33%, #FCCD2A 98.56%)",
                fontWeight: "400",
              }}
            >
              Back To Quiz
            </button>
          </div>
          <div className="flex justify-center w-full">
            <button
              className="px-5 py-2 text-white rounded-md w-[40%]"
              style={{
                background: "linear-gradient(275.76deg, #347928 44.33%, #FCCD2A 98.56%)",
                fontWeight: "400",
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSection;