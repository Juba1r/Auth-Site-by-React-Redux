import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div style={{ marginTop: "-3.5rem" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Protect the Home route */}
          <Route path="/home" element={<PrivateRoute element={Home} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
