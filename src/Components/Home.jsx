import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Utils/authSlice";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const goToLogin = () => {
    navigate("/login");
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    if (isLoggedIn) {
      navigate("/login");
    }
    toast.success("you are loggedout ");
    dispatch(logout());
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          E-Learning-App
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow"></div>
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
            onClick={goToLogin}
          >
            Login
          </button>
          <button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
            onClick={goToSignup}
          >
            Signup
          </button>
          <FiX
            className="text-white lg:hidden ml-4 cursor-pointer"
            size={24}
            onClick={toggleMenu}
          />
        </div>
        <div className="hidden lg:block">
          {isLoggedIn ? (
            <button
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
                onClick={goToLogin}
              >
                Login
              </button>
              <button
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
                onClick={goToSignup}
              >
                Signup
              </button>
            </>
          )}
        </div>
        <FiMenu
          className="text-white lg:hidden ml-4 cursor-pointer"
          size={24}
          onClick={toggleMenu}
        />
      </div>
    </nav>
  );
};

export default Home;
