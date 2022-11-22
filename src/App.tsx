import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginPage";
import Table from "./pages/Table";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";

const App: React.FC = () => {

  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/table" element={<Table />} />
          </Routes>
        </ThemeProvider>
    </div>
  );
};

export default App;
