import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginPage";

=======
import TablePage from "./pages/Table";
>>>>>>> feat/table
const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
=======
        <Route path="/" element={<TablePage />} />
>>>>>>> feat/table
      </Routes>
    </div>
  );
};

export default App;