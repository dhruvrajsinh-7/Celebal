import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Utils/authSlice";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<PrivateRoute />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

const PrivateRoute = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return isLoggedIn ? null : <Navigate to="/login" replace />;
};

export default App;
