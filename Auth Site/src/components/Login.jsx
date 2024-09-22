import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null); // New state for notification
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await login({ user_id: email, password }).unwrap();
      console.log(result);

      if (result.token) {
        // Dispatch the token and user details to the store
        dispatch(setCredentials({ user: result.user, token: result.token }));

        // Show success notification
        setNotification({
          message: "Login successful!",
          type: "success",
        });

        setTimeout(() => {
          navigate("/home"); // Redirect to homepage after successful login
        }, 1500); // Redirect after 1.5 seconds
      } else {
        // Show error notification
        setNotification({
          message: `Login failed: ${result.message}`,
          type: "error",
        });
      }
    } catch (err) {
      console.error("Login error:", err);
      // Show error notification
      setNotification({
        message: "Login failed! Please check your credentials and try again.",
        type: "error",
      });
    }
  };

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center text-center vh-100"
        style={{
          backgroundImage:
            "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))",
        }}
      >
        <div className="bg-white p-3 rounded" style={{ width: "40%" }}>
          <h2 className="mb-3 text-primary">Login</h2>

          {/* Notification box */}
          {notification && (
            <div
              className={`alert ${
                notification.type === "success"
                  ? "alert-success"
                  : "alert-danger"
              }`}
              role="alert"
            >
              {notification.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <strong>Email Id</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="container my-2">Don&apos;t have an account?</p>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
