import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="container mt-5 fade-in">

      <h2 className="mb-4">🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          No hay productos en el carrito
        </div>
      ) : (
        <>
          <div className="row">

            <div className="col-md-8">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="card mb-3 shadow-sm p-3 d-flex flex-row justify-content-between align-items-center"
                >

                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-0">
                      Cantidad: {item.qty}
                    </p>
                    <strong>${item.price * item.qty}</strong>
                  </div>

                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>

                </div>
              ))}

            </div>

            {/* RESUMEN */}
            <div className="col-md-4">

              <div className="card shadow p-3">

                <h4>Total</h4>

                <h2 className="text-success">
                  ${total}
                </h2>

                <button
                  className="btn btn-success w-100 mt-3"
                  onClick={() => navigate("/checkout")}
                >
                  💳 Ir a pagar
                </button>

                <button
                  className="btn btn-warning w-100 mt-2"
                  onClick={clearCart}
                >
                  Vaciar carrito
                </button>

              </div>

            </div>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;