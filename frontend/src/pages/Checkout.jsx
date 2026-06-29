import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [payment, setPayment] = useState("Tarjeta");

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const finishPurchase = (e) => {
    e.preventDefault();

    alert("✅ ¡Compra realizada con éxito!\n\nGracias por elegir BookVerse.");

    clearCart();

    navigate("/");
  };

  return (
    <div className="container mt-5">

      <div className="row">

        <div className="col-lg-7">

          <div className="card shadow">

            <div className="card-body">

              <h2 className="mb-4">
                Finalizar compra
              </h2>

              <form onSubmit={finishPurchase}>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label>Nombre</label>

                    <input
                      className="form-control"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      required
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label>Apellido</label>

                    <input
                      className="form-control"
                      value={lastname}
                      onChange={(e)=>setLastname(e.target.value)}
                      required
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label>Correo</label>

                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />

                </div>

                <div className="mb-3">

                  <label>Teléfono</label>

                  <input
                    className="form-control"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    required
                  />

                </div>

                <div className="mb-3">

                  <label>Dirección</label>

                  <input
                    className="form-control"
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    required
                  />

                </div>

                <div className="mb-3">

                  <label>Ciudad</label>

                  <input
                    className="form-control"
                    value={city}
                    onChange={(e)=>setCity(e.target.value)}
                    required
                  />

                </div>

                <div className="mb-4">

                  <label>Forma de pago</label>

                  <select
                    className="form-select"
                    value={payment}
                    onChange={(e)=>setPayment(e.target.value)}
                  >

                    <option>Tarjeta</option>

                    <option>Transferencia</option>

                    <option>Efectivo</option>

                  </select>

                </div>

                <button className="btn btn-success btn-lg w-100">
                  Confirmar compra
                </button>

              </form>

            </div>

          </div>

        </div>

        <div className="col-lg-5">

          <div className="card shadow">

            <div className="card-body">

              <h3>Resumen</h3>

              <hr />

              {cart.map((item)=>(

                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-3"
                >

                  <div>

                    <strong>{item.title}</strong>

                    <br />

                    x{item.quantity}

                  </div>

                  <div>

                    ${item.price * item.quantity}

                  </div>

                </div>

              ))}

              <hr />

              <h3 className="text-end">

                Total: ${total}

              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;