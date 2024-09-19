import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token from local storage
    navigate("/login");
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))",
      }}
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
    >
      <h1>Login Success Page</h1>
      <button onClick={handleLogout} className="btn btn-light my-5">
        Logout
      </button>
    </div>
  );
};

export default Home;
