import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginPage"; 

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm onAddUser={()=>{console.log("hello");
        }}/>}/>
        </Routes>
    </div>
  );
};

export default App;
