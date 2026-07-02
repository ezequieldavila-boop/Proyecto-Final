import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);

  const pay = () => {
    alert("🎉 Compra realizada con éxito");
    clearCart();
    navigate("/");
  };

  return (
    <div className="container mt-5 fade-in">

      <h2>💳 Checkout</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">
          No hay productos en el carrito
        </div>
      ) : (
        <div className="row">

          <div className="col-md-7">

            {cart.map((item) => (
              <div className="card mb-3 p-3" key={item.id}>
                <h5>{item.title}</h5>
                <p>Cantidad: {item.qty}</p>
                <p>${item.price * item.qty}</p>
              </div>
            ))}

          </div>

          <div className="col-md-5">

            <div className="card p-3 shadow">

              <h4>Total</h4>
              <h2 className="text-success">${total}</h2>

              <button
                className="btn btn-success w-100 mt-3"
                onClick={pay}
              >
                💳 Pagar
              </button>

              <button
                className="btn btn-dark w-100 mt-2"
                onClick={() => navigate("/cart")}
              >
                Volver
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Checkout;