import React from "react";

const subjects = [
  { name: "Mathematics", image: "/image.png" },
  { name: "Science", image: "/home/image.png" },
  { name: "English", image: "/home/image.png" },
  { name: "Computer Study", image: "/image.png" },
];

const Dashboard = () => {
  return (
    <div className="bg-green-700 text-white py-8 px-6 md:px-10">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold ml-6 md:ml-12" style={{ fontFamily: "Merriweather, serif" }}>
          Dashboard
        </h2>
        <button className="px-4 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-green-700 transition mt-4 md:mt-0 mr-6 md:mr-12">
          Add New Subject
        </button>
      </div>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-29 mt-10">
        {subjects.map((subject, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={subject.image} alt={subject.name} className="w-20 h-20" />
            <p className="mt-2 text-lg text-center" style={{ fontFamily: "Merriweather, serif" }}>
              {subject.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
