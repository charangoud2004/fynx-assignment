import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setErrMsg("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrMsg(data.message || "Login failed");
        return;
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      setErrMsg("Something went wrong. Try again.");
    }
  }
  return (
    <div className="page">
      <div className="card">
        <h2 className="title">Sign In</h2>
        {errMsg && <p className="error">{errMsg}</p>}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="field">
            <label className="label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
              placeholder=""
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p className="switch-text">
          Don't have an account? <Link to="/register" className="link">Register</Link>
        </p>
      </div>
    </div>
  );
}