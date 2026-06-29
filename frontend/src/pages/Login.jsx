import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      alert("Inicio de sesión correcto");

      navigate("/");
    } catch (error) {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow">

        <div className="card-body">

          <h2 className="text-center mb-4">
            Iniciar Sesión
          </h2>

          <form onSubmit={login}>

            <div className="mb-3">

              <label>Email</label>

              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            <div className="mb-3">

              <label>Contraseña</label>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <button className="btn btn-primary w-100">
              Iniciar Sesión
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Login;