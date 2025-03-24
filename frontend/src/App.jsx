import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetNotes from "./pages/GetNotes";
import PastPaperAccess from "./pages/PastPaperAccess";
import CategorizedPastPapers from "./pages/CategorizedPastPapers";
import StartGK from "./pages/StartGK";
import CurrentAffairPreps from "./pages/CurrentAffairPreps";
import EnglishPotential from "./pages/EnglishPotential";
import MathPotential from "./pages/MathPotential";
import Geography from "./pages/Geography";
import ComputerStudy from "./pages/ComputerStudy";
import IslamicStudy from "./pages/IslamicStudy";
import SetTest from "./pages/SetTest";
import SubmitMCQ from "./pages/SubmitMCQ";
import ComingSoon from "./pages/ComingSoon";
import PageNotFound from "./pages/PageNotFound";

import AdminRoutes from "./Admin/AdminRoutes";


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/get-notes" element={<GetNotes />} />
        <Route path="/past-paper-access" element={<PastPaperAccess />} />
        <Route path="/categorized-past-papers" element={<CategorizedPastPapers />} />
        <Route path="/start-gk" element={<StartGK />} />
        <Route path="/current-affair-preps" element={<CurrentAffairPreps />} />
        <Route path="/english-potential" element={<EnglishPotential />} />
        <Route path="/math-potential" element={<MathPotential />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/computer-study" element={<ComputerStudy />} />
        <Route path="/islamic-study" element={<IslamicStudy />} />
        <Route path="/set-test" element={<SetTest />} />
        <Route path="/submit-mcq" element={<SubmitMCQ />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<PageNotFound />} />
        
        <Route path="/admin/*" element={< AdminRoutes/>} />
      </Routes>
    </Router>
  );
};

export default App;
