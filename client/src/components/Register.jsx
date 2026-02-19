import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setErrMsg("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, dateofbirth, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrMsg(data.message || "Registration failed");
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
        <h2 className="title">Create Account</h2>

        {errMsg && <p className="error">{errMsg}</p>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Full Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input"
              placeholder="e.g. John"
            />
          </div>

          <div className="field">
            <label className="label">Date of Birth</label>
            <input
              type="date"
              value={dateofbirth}
              onChange={(e) => setDateofbirth(e.target.value)}
              required
              className="input"
            />
          </div>

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

          <button type="submit" className="btn">Register</button>
        </form>

        <p className="switch-text">
          Already have an account? <Link to="/login" className="link">Sign In</Link>
        </p>
      </div>
    </div>
  );
}