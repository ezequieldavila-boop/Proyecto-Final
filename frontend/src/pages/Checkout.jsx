import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate, Navigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // 🔒 si no está logueado no entra
  if (!token) {
    return <Navigate to="/login" />;
  }

  const total = cart.reduce(
    (acc, book) => acc + Number(book.price),
    0
  );

  const finalizarCompra = () => {
    alert("✅ Compra realizada con éxito");

    clearCart();

    navigate("/");
  };

  return (
    <div
      className="container"
      style={{
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      <h1 className="mb-4">🧾 Checkout</h1>

      <div className="row">

        {/* FORMULARIO */}
        <div className="col-lg-7 mb-4">

          <div className="card shadow p-4">

            <h4 className="mb-3">Datos del comprador</h4>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label>Nombre</label>

                <input className="form-control" />

              </div>

              <div className="col-md-6 mb-3">

                <label>Apellido</label>

                <input className="form-control" />

              </div>

            </div>

            <div className="mb-3">

              <label>Email</label>

              <input className="form-control" />

            </div>

            <div className="mb-3">

              <label>Dirección</label>

              <input className="form-control" />

            </div>

            <div className="mb-3">

              <label>Ciudad</label>

              <input className="form-control" />

            </div>

            <div className="mb-3">

              <label>Pago</label>

              <select className="form-select">

                <option>Tarjeta</option>

                <option>Débito</option>

                <option>Mercado Pago</option>

              </select>

            </div>

          </div>

        </div>

        {/* RESUMEN */}
        <div className="col-lg-5">

          <div className="card shadow p-4">

            <h4 className="mb-3">Resumen</h4>

            {cart.map((book, i) => (

              <div
                key={i}
                className="d-flex justify-content-between mb-2"
              >

                <span>{book.title}</span>

                <strong>${book.price}</strong>

              </div>

            ))}

            <hr />

            <h3>Total: ${total}</h3>

            <button
              className="btn btn-warning w-100 mt-3"
              onClick={finalizarCompra}
            >
              Confirmar compra
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;