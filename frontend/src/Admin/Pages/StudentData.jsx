import React from "react";

const students = [
  {
    id: 1,
    name: "Ali Khan",
    class: "Class 10 - A",
    marks: 89,
    image: "/admin/img2.jpeg",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    class: "Class 9 - B",
    marks: 92,
    image: "/admin/img2.jpeg",
  },
  {
    id: 3,
    name: "Hassan Raza",
    class: "Class 11 - C",
    marks: 85,
    image: "/admin/img2.jpeg",
  },
  {
    id: 4,
    name: "Noor Fatima",
    class: "Class 12 - A",
    marks: 95,
    image: "/admin/img2.jpeg",
  },
  {
    id: 5,
    name: "Zain Malik",
    class: "Class 8 - B",
    marks: 88,
    image: "/admin/img2.jpeg",
  },
  {
    id: 6,
    name: "Ayesha Khan",
    class: "Class 7 - C",
    marks: 90,
    image: "/admin/img2.jpeg",
  },
];

const StudentData = () => {
  return (
    <div className="p-4 lg:ml-[250px]">
      <h1 className="text-3xl font-bold text-center mb-6">Student Data</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:scale-105 transition duration-300"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
            />
            <h2 className="text-lg font-bold mt-3">{student.name}</h2>
            <p className="text-gray-500">{student.class}</p>
            <p className="text-gray-700 font-semibold">Marks: {student.marks}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentData;
