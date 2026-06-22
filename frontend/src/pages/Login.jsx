import { useState } from "react";
import api from "../services/api";

function Login() {
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

      alert("Login correcto");
    } catch (error) {
      console.log(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="container py-5">
      <h2>Iniciar Sesión</h2>

      <form onSubmit={login}>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;