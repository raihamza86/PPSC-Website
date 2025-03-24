import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import PastPapers from "./Pages/PastPapers";

import PaperList from "./Pages/PaperList";
import Uploadpaper from "./Pages/Uploadpaper";
import StudentData from "./Pages/StudentData";
import MCQForm from "./Pages/MCQform";


const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        
        
    
        <Route path="/admindashboard" element={<AdminDashboard />} />
        
        <Route path="/pastpapers" element={<PastPapers />} />
         
        <Route path="/paperlist" element={<PaperList />} />
          
        <Route path="/uploadpaper" element={<Uploadpaper />} />
        <Route path="/studentdata" element={<StudentData />} />
        
        <Route path="/mcqform" element={<MCQForm />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
