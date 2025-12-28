import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  isAuthenticated: boolean;
  login: () => void;
};

export default function Login({ isAuthenticated, login }: Props) {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    if (isAuthenticated) navigate("/admin");
  }, [isAuthenticated, navigate]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin1234") {
      alert("Login success");
      login();
      navigate("/admin");
    } else {
      alert("Wrong email or password");
    }
  }

  return (
    <div style={{ maxWidth: 320, margin: "40px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@gmail.com"
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="admin1234"
          />
        </div>
        <button type="submit" style={{ marginTop: 16 }}>Login</button>
      </form>
    </div>
  );
}
