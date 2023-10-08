import React from "react";
import Header from "./Component/Header/Header";
import Videos from "./Component/Videos/Videos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<div className="app_page"><Videos /></div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
