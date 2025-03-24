import React, { useState } from "react";

const papersData = [
  {
    id: 1,
    image: "/admin/img1.avif",
    subject: "Mathematics",
    classCategory: "10th",
    board: "Punjab Board",
    description: "Algebra and Trigonometry past paper 2023."
  },
  {
    id: 2,
    image: "/admin/img1.avif",
    subject: "Physics",
    classCategory: "9th",
    board: "Federal Board",
    description: "Mechanics and Thermodynamics paper 2022."
  }
];

const PaperList= () => {
  const [papers, setPapers] = useState(papersData);
  const [editingPaper, setEditingPaper] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (paper) => {
    setEditingPaper(paper);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setPapers(papers.filter((paper) => paper.id !== id));
  };

  const handleFormSubmit = (formData) => {
    if (editingPaper) {
      setPapers(papers.map((p) => (p.id === editingPaper.id ? { ...formData, id: p.id } : p)));
    } else {
      setPapers([...papers, { ...formData, id: papers.length + 1 }]);
    }
    setEditingPaper(null);
    setShowForm(false);
  };

  return (
    <div className="p-6 md:ml-[250px] transition-all duration-300">
      {showForm ? (
        <UploadPaper initialData={editingPaper} onSubmit={handleFormSubmit} onCancel={() => setShowForm(false)} />
      ) : (
        <div>
          <h1 className="text-2xl font-semibold mb-4">Past Papers</h1>
          <div className="bg-white shadow-md rounded-lg p-4">
            {papers.map((paper) => (
              <div
                key={paper.id}
                className="flex flex-col md:flex-row items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-md mb-4 hover:bg-gray-100 transition"
              >
                <img src={paper.image} alt={paper.subject} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-lg font-bold">{paper.subject}</h2>
                  <p className="text-gray-500 font-semibold">{paper.classCategory}</p>
                  <p className="text-gray-600">{paper.description}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(paper)} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Edit</button>
                  <button onClick={() => handleDelete(paper.id)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const UploadPaper = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState(
    initialData || { subject: "", classCategory: "", board: "", image: null }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          {initialData ? "Edit Paper" : "Upload Past Paper"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Subject</label>
            <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Class Category</label>
            <select name="classCategory" value={formData.classCategory} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option value="">Select Class</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Board</label>
            <select name="board" value={formData.board} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none">
              <option value="">Select Board</option>
              <option value="Punjab Board">Punjab Board</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Image</label>
            <input type="file" accept="image/*" onChange={handleFileChange} className="w-full px-4 py-3 border rounded-lg" />
          </div>
          <div className="flex gap-4">
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Submit</button>
            <button type="button" onClick={onCancel} className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaperList;
