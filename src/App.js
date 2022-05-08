import React from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Login from "./components/login/login";
import Registration from "./components/signIn/signIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/auth/auth";
import RequireAuth from "./components/auth/RequireAuth";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation></Navigation>
          <h1>This is a password manager App</h1>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Registration />} />
            {/* <Route path="*" element={<Error />} /> */}
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
