import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/navigation";
import Login from "./Components/Login/login";
import Registration from "./Components/Registration/registration";
import Error from "./Components/Error/error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <Registration></Registration>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Registration />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
