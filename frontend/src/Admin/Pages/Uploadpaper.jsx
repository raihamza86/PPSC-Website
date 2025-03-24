import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadPaper = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subject: "",
    classCategory: "",
    board: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload an image!");
      return;
    }

    // Convert image to Base64
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    try {
      const imageBase64 = await toBase64(formData.image);

      // Retrieve existing papers from local storage
      const existingPapers = JSON.parse(localStorage.getItem("papers")) || [];

      // Store new paper
      const newPaper = {
        subject: formData.subject,
        classCategory: formData.classCategory,
        board: formData.board,
        image: imageBase64, // Store Base64 image
      };

      // Save updated papers list to local storage
      localStorage.setItem("papers", JSON.stringify([...existingPapers, newPaper]));

      alert("Paper uploaded successfully!");
      navigate("/admin/paperlist"); // Redirect to Paper List page
    } catch (error) {
      console.error("Error converting image to Base64:", error);
      alert("Failed to upload image.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          📄 Upload Past Paper
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Subject Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Subject</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none shadow-sm"
            >
              <option value="">Select Subject</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
              <option value="English">English</option>
            </select>
          </div>

          {/* Class Category Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Class Category</label>
            <select
              name="classCategory"
              value={formData.classCategory}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none shadow-sm"
            >
              <option value="">Select Class</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
              <option value="Bachelor">Bachelor</option>
              <option value="Masters">Masters</option>
            </select>
          </div>

          {/* Board Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Board</label>
            <select
              name="board"
              value={formData.board}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 outline-none shadow-sm"
            >
              <option value="">Select Board</option>
              <option value="Punjab Board">Punjab Board</option>
              <option value="Federal Board">Federal Board</option>
              <option value="PPSC">PPSC</option>
              <option value="FPSC">FPSC</option>
            </select>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={handleFileChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-100 shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition duration-300 shadow-md"
          >
          Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPaper;
