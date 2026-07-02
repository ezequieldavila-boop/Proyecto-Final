import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      const user = res.data.user;

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate(user.role === "admin" ? "/admin" : "/");

      window.location.reload();

    } catch {
      alert("Error en login");
    }
  };

  return (
    <div className="container" style={{ marginTop: "120px" }}>
      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-body p-4">

              <h3 className="text-center mb-4">
                Iniciar sesión
              </h3>

              <form onSubmit={login}>

                <input
                  className="form-control mb-3"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="form-control mb-3"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-warning w-100">
                  Entrar
                </button>

              </form>

              <div className="mt-3 text-center">
                <Link to="/register">Crear cuenta</Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;