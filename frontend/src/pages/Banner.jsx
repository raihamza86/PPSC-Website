import React from "react";

const Banner = () => {
  return (
    <div
      className="mt-0 relative w-full h-[400px] md:h-[500px] flex items-center bg-cover bg-center px-4 md:px-16"
      style={{ backgroundImage: "url('/img1.png')" }}
    >
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative text-white max-w-2xl text-left">
        <h1
          className="font-bold"
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "105%",
          }}
        >
          Best Place to Prepare  for Competitive Exams
        </h1>
        <p
          className="mt-4 text-xs md:text-sm font-extralight px-2"
          style={{ fontFamily: "Open Sans, sans-serif" }}
        >
          SkillSphere is a digital crack competitive exams for government jobs with interactive quizzes,
          in-depth answers, and previous paper analysis for PPSC and FPSC. Platforms for Test Prep and MCQs.
        </p>
        <button
  className="mt-6 px-6 py-3 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
  style={{
    background: "linear-gradient(275.76deg, #347928 44.33%, #FCCD2A 98.56%)",
    backgroundSize: "200% 100%",
    transition: "background-position 0.5s ease-in-out",
  }}
  onMouseEnter={(e) => (e.target.style.backgroundPosition = "100% 0")}
  onMouseLeave={(e) => (e.target.style.backgroundPosition = "0 0")}
>
  Prepare For Exams
</button>

      </div>
    </div>
  );
};

export default Banner;
