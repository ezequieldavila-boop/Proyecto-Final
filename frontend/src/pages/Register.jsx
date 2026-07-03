import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      const res = await api.post("/auth/register", {
        name,
        lastname,
        email,
        password,
      });

      // 🔥 AUTO LOGIN DESPUÉS DE REGISTRAR
      const loginRes = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", loginRes.data.token);
      localStorage.setItem("name", loginRes.data.user.name);
      localStorage.setItem("lastname", loginRes.data.user.lastname);
      localStorage.setItem("role", loginRes.data.user.role);

      alert("Cuenta creada e inicio de sesión automático ✔");

      navigate("/");

      window.location.reload();

    } catch (error) {
      console.log(error);
      alert("Error al crear cuenta");
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-body p-4">

              <h2 className="text-center mb-4">
                Crear cuenta
              </h2>

              <form onSubmit={register}>

                <input
                  className="form-control mb-2"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  className="form-control mb-2"
                  placeholder="Apellido"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />

                <input
                  className="form-control mb-2"
                  type="email"
                  placeholder="Email"
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
                  Crear cuenta
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;