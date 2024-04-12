import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", {
        email,
        password,
        phone,
      });
      console.log(response.data); // handle response and redirect
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="container">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="input-field">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <div className="input-field">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Phone</label>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
