import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/navigation";
import Login from "./components/Login/login";
import Registration from "./components/Registration/registration";
import Error from "./components/Error/error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/Auth/AuthProvider";
import RequireAuth from "./components/Auth/RequireAuth";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation></Navigation>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Registration />} />
            {/* <Route path="*" element={<Error />} /> */}
            <Route path="/dashboard" element={ <RequireAuth><Dashboard /></RequireAuth> } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
