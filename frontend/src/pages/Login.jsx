import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import ToastAlert from "../components/ToastAlert";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("role", response.data.user.role);

      setToast({
        show: true,
        message: "✔ Login exitoso",
        type: "success",
      });

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);

    } catch (error) {
      setToast({
        show: true,
        message: "❌ Credenciales incorrectas",
        type: "danger",
      });
    }
  };

  return (
    <div className="container mt-5">

      <ToastAlert
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow-lg">

            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Iniciar sesión
              </h2>

              <form onSubmit={login}>

                <input
                  className="form-control mb-3"
                  type="email"
                  placeholder="Correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  className="form-control mb-3"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-warning w-100">
                  Entrar
                </button>

              </form>

              <hr />

              <Link to="/register" className="btn btn-outline-dark w-100">
                Crear cuenta
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;