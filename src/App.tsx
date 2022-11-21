import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginPage";
import Table from "./pages/Table";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
};

export default App;
