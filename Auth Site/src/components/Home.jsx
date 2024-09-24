import { useNavigate } from "react-router-dom";
import { useFetchProductsQuery } from "../redux/productSlice"; // Import updated query hook
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

const Home = () => {
  const { data: products, error, isLoading } = useFetchProductsQuery(); // Fetch products
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
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

      <div
        className="container-fluid py-5"
        style={{
          backgroundImage: "linear-gradient(to left, #000428, #004e92)",
          color: "#fff",
        }}
      >
        <h2 className="text-center mb-5">Featured Products</h2>

        <div className="row">
          {isLoading && <p className="text-center">Loading products...</p>}
          {error && (
            <p className="text-center text-danger">
              Failed to load products: {error.message}
            </p>
          )}
          {products?.data?.data?.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <img
                  src={product.file_manager?.url || "/placeholder.jpg"}
                  alt={product.name}
                  className="card-img-top"
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-primary">${product.price}</p>
                  <p className="card-text">{product.description}</p>
                  <button className="btn btn-warning">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
