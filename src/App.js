import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/navigation";
import Login from "./Components/Login/login";
import Registration from "./Components/signIn/signIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./Components/Auth/auth";
import RequireAuth from "./Components/Auth/RequireAuth";
import Dashboard from "./Components/Dashboard/dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation></Navigation>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Registration />} />
            <Route path="/dashboard" element={ <RequireAuth><Dashboard /></RequireAuth> } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;