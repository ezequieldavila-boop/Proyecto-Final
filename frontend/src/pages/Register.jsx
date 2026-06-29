import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        lastname,
        email,
        password,
      });

      alert("Cuenta creada correctamente");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Error al crear la cuenta");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg">
            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Crear cuenta
              </h2>

              <form onSubmit={register}>

                <input
                  className="form-control mb-3"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  className="form-control mb-3"
                  placeholder="Apellido"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required
                />

                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  className="form-control mb-4"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button className="btn btn-warning w-100">
                  Crear cuenta
                </button>

              </form>

              <hr />

              <Link
                to="/login"
                className="btn btn-outline-dark w-100"
              >
                Ya tengo una cuenta
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;