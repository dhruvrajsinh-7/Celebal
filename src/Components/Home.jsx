import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <h1 className="text-4xl text-white mb-8">Welcome to My App</h1>
      <div className="flex gap-3">
        <button
          className="bg-black text-white rounded-lg px-6 py-3"
          onClick={goToLogin}
        >
          Login
        </button>
        <button
          className="bg-black text-white rounded-lg px-6 py-3"
          onClick={goToSignup}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Home;
