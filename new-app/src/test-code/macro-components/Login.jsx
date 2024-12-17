import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuthContext } from "../../client/src/auth/userContext";

function Login() {
  const navigate = useNavigate();
  const { setUserData } = useAuthContext();

  //states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  async function submitHandler(e) {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    setLoading(true);

    try {
      const response = await fetch(
        `https://chat-app-100.vercel.app/login`,
        requestOptions
      );

      const data = await response.json();
      if (data.status === "failure") throw new Error(data.message);
      const { name, token, email, testType } = data.data; //thats just how my API works
      // console.log(data);
      setUserData((prev) => {
        return { ...prev, name, email, testType, isAuthenticated: true, token };
      });
      toast.success("Logged in successfully!");
      navigate("/intro", { replace: true });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div className="body">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="login-input"
            placeholder="Enter your email"
            required
          />
          <div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="login-input"
              placeholder="Enter your password"
              required
            />

            <span
              onClick={toggleShowPassword}
              style={{
                cursor: "pointer",
                display: "inline-block",
                textDecoration: "underline",
                marginBottom: "10px",
              }}
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </span>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
