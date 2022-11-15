import React from "react";
import { Routes, Route } from "react-router-dom";
import TablePage from "./pages/Table";
const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TablePage />} />
        
      </Routes>
    </div>
  );
};

export default App;