import React from "react";
import "./App.css";
<<<<<<< HEAD
import Navigation from "./Components/Navigation/navigation";
import Login from "./Components/Login/login";
import Registration from "./Components/signIn/signIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./Components/Auth/auth";
import RequireAuth from "./Components/Auth/RequireAuth";
import Dashboard from "./Components/Dashboard/dashboard";
=======
import Navigation from "./components/Navigation/navigation";
import Login from "./components/Login/login";
import Registration from "./components/Registration/registration";
import Error from "./components/Error/error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./components/Auth/AuthProvider";
import RequireAuth from "./components/Auth/RequireAuth";
import Dashboard from "./components/Dashboard/Dashboard";
>>>>>>> 59a5a6ac0668e4b81215c280317ddb5c5f281934

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navigation></Navigation>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Registration />} />
<<<<<<< HEAD
=======
            {/* <Route path="*" element={<Error />} /> */}
>>>>>>> 59a5a6ac0668e4b81215c280317ddb5c5f281934
            <Route path="/dashboard" element={ <RequireAuth><Dashboard /></RequireAuth> } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;