import { useEffect } from "react";

function ToastAlert({ message, type = "success", show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 9999 }}>

      <div className={`toast show text-bg-${type} border-0 shadow`}>

        <div className="d-flex">

          <div className="toast-body">
            {message}
          </div>

          <button
            className="btn-close btn-close-white me-2 m-auto"
            onClick={onClose}
          />

        </div>

      </div>

    </div>
  );
}

export default ToastAlert;