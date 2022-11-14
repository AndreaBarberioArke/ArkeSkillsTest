import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginPage"; 

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </div>
  );
};

export default App;
