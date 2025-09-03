import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Response: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get("status");
    const orderId = queryParams.get("order_id");

    console.log("📌 Juspay Payment Response:", {
      status,
      orderId,
    });
  }, [location]);

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold">Payment Response</h2>
      <p>Check console for payment status details.</p>
    </div>
  );
};

export default Response;
