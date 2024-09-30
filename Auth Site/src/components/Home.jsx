import { useNavigate } from "react-router-dom";
import { useFetchProductsQuery } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeOneFromCart } from "../redux/cartSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import "../assets/style.css";
import bg from "../assets/bg.jpg";
import { BsCart4 } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";

const Home = () => {
  const { data: products, error, isLoading, isError } = useFetchProductsQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = useSelector((state) => state.cart.cartCount);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeOneFromCart(productId));
  };

  return (
    <div>
      <div className="cart-icon-container">
        <BsCart4 size={40} color="#fff" />
        {totalCount > 0 && <span className="cart-counter">{totalCount}</span>}

        <div className="cart-dropdown">
          {cartItems.length > 0 ? (
            <ul className="list-group">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{item.name}</strong> <br />${item.price} x{" "}
                    {item.quantity}
                  </div>
                  <FaMinusCircle
                    className="text-danger remove-icon"
                    onClick={() => handleRemoveFromCart(item.id)}
                    style={{ cursor: "pointer" }}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">Cart is empty</p>
          )}
        </div>
      </div>

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
          {isLoading ? (
            <p className="text-center">Loading products...</p>
          ) : isError ? (
            <p className="text-center text-danger">
              Failed to load products: {error.message}
            </p>
          ) : products?.data?.data?.length > 0 ? (
            products.data.data.map((product) => (
              <div key={product.id} className="col-md-2 mb-4">
                <div className="card h-100 text-center shadow-sm product-card">
                  <img
                    src={bg}
                    alt={product.name}
                    className="card-img-top"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                  <div className="sidebar-buttons">
                    <div className="sidebar-button">
                      <i className="bi bi-heart"></i>
                    </div>
                    <div className="sidebar-button">
                      <i className="bi bi-eye"></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-primary">${product.price}</p>
                    <p className="card-text">{product.description}</p>

                    <button
                      className="btn btn-warning add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
