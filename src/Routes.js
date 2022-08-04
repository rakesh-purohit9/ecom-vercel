import React from "react";
import Casestudy from "pages/Casestudy";
import Homepage from "pages/Homepage";
import ProductDetail from "pages/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/casestudy" element={<Casestudy />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
