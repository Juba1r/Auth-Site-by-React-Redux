import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const products = [
    { id: 1, name: "Product 1", price: "$29.99", image: "/path/to/image1.jpg" },
    { id: 2, name: "Product 2", price: "$49.99", image: "/path/to/image2.jpg" },
    { id: 3, name: "Product 3", price: "$19.99", image: "/path/to/image3.jpg" },
    { id: 4, name: "Product 4", price: "$39.99", image: "/path/to/image4.jpg" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          color: "#fff",
        }}
        className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
      >
        <h1 className="display-4 fw-bold">Welcome to Dark Site Man!</h1>
        <p className="lead">
          Explore the best products at affordable prices. One Jack Daniels is
          free with your first order!
        </p>
        <button className="btn btn-light btn-lg my-3">কিনবেন? 😍</button>
        <button onClick={handleLogout} className="btn btn-outline-light my-3">
          Logout-টাটা
        </button>
      </div>

      {/* Product Section */}
      <div
        className="container-fluid py-5"
        style={{
          backgroundImage: "linear-gradient(to left, #000428, #004e92)",
          color: "#fff",
        }}
      >
        <h2 className="text-center mb-5">Featured Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-primary">{product.price}</p>
                  <button className="btn btn-warning">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div
        className="container-fluid py-5"
        style={{
          backgroundImage: "linear-gradient(to left, #000428, #004e92)",
          color: "#fff",
        }}
      >
        <h2 className="text-center mb-5">Shop by Category</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{
                backgroundImage: "url('https://via.placeholder.com/400x300')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-end text-white">
                <h4>Electronics</h4>
                <button className="btn btn-light">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{
                backgroundImage: "url('https://via.placeholder.com/400x300')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-end text-white">
                <h4>Fashion</h4>
                <button className="btn btn-light">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{
                backgroundImage: "url('https://via.placeholder.com/400x300')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-end text-white">
                <h4>Home & Kitchen</h4>
                <button className="btn btn-light">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
