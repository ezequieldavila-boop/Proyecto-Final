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
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("lastname", response.data.user.lastname);
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("role", response.data.user.role);

      if (response.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }

      window.location.reload();

    } catch (error) {
      console.log(error);
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow-lg">

            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Iniciar sesión
              </h2>

              <form onSubmit={login}>

                <div className="mb-3">
                  <label className="form-label">
                    Correo electrónico
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Ingrese su correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">
                    Contraseña
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button className="btn btn-warning w-100">
                  Iniciar sesión
                </button>

              </form>

              <hr />

              <p className="text-center">
                ¿No tienes una cuenta?
              </p>

              <div className="d-grid">
                <Link
                  to="/register"
                  className="btn btn-outline-dark"
                >
                  Crear cuenta
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;