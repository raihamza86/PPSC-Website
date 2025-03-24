import React from "react";

const pastPapers = [
  {
    id: 1,
    title: "Mathematics",
    description: "Past papers for algebra, geometry, and calculus.",
    image: "/admin/img1.avif",
  },
  {
    id: 2,
    title: "Physics",
    description: "Mechanics, electricity, and modern physics past papers.",
    image: "/admin/img1.avif",
  },
  {
    id: 3,
    title: "Chemistry",
    description: "Organic, inorganic, and physical chemistry past papers.",
    image: "/admin/img1.avif",
  },
  {
    id: 4,
    title: "Biology",
    description: "Past papers covering genetics, cells, and human anatomy.",
    image: "/admin/img1.avif",
  },
  {
    id: 5,
    title: "Computer Science",
    description: "Programming, networking, and database past papers.",
    image: "/admin/img1.avif",
  },
  {
    id: 6,
    title: "English",
    description: "Grammar, literature, and comprehension past papers.",
    image: "/admin/img1.avif",
  },
];

const PastPapers = () => {
  return (
    <div className="min-h-screen py-10 px-4 md:ml-[250px] transition-all duration-300">
      <h1 className="text-3xl font-bold text-center mb-6">Past Papers</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastPapers.map((paper) => (
          <div
            key={paper.id}
            className="rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 bg-white"
          >
            <img
              src={paper.image}
              alt={paper.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{paper.title}</h3>
              <p className="text-sm mt-2 text-gray-600">{paper.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastPapers;
