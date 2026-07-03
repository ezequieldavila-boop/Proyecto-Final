import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("card");

  const total = cart.reduce(
    (acc, i) => acc + i.price * i.qty,
    0
  );

  const pay = (e) => {
    e.preventDefault();

    alert("🎉 Compra realizada con éxito");

    clearCart();
    navigate("/");
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4 text-center">
        💳 Checkout seguro
      </h2>

      <div className="row">

        {/* FORMULARIO */}
        <div className="col-md-7">

          <div className="card shadow p-4">

            <h5 className="mb-3">Datos del cliente</h5>

            <form onSubmit={pay}>

              <input
                className="form-control mb-3"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                className="form-control mb-3"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                className="form-control mb-3"
                placeholder="Dirección"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />

              <h6 className="mb-2">Método de pago</h6>

              <select
                className="form-select mb-3"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              >
                <option value="card">💳 Tarjeta</option>
                <option value="cash">💵 Efectivo</option>
                <option value="transfer">🏦 Transferencia</option>
              </select>

              <button className="btn btn-success w-100">
                Confirmar compra
              </button>

            </form>

          </div>

        </div>

        {/* RESUMEN */}
        <div className="col-md-5">

          <div className="card shadow p-4">

            <h5>Resumen del pedido</h5>

            <hr />

            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >
                <span>
                  {item.title} x {item.qty}
                </span>

                <span>
                  ${item.price * item.qty}
                </span>
              </div>
            ))}

            <hr />

            <h4 className="text-success">
              Total: ${total.toFixed(2)}
            </h4>

            <button
              className="btn btn-dark w-100 mt-3"
              onClick={() => navigate("/cart")}
            >
              Volver al carrito
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;