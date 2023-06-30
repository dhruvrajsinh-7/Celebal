import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Custom authentication check
  const isAuthenticated = () => {
    return isLoggedIn;
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Simulating a logout
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/" replace /> : <Login onLogin={login} />
          }
        />
        <Route
          path="/signup"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Signup onSignup={login} />
            )
          }
        />
        <Route
          path="/*"
          element={isAuthenticated() ? null : <Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
