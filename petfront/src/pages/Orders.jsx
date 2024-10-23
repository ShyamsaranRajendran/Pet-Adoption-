import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch order data from the backend
    fetch("http://localhost:5000/order/all")
      .then((response) => response.json())
      .then((data) => {
        if (data.orders) {
          setOrders(data.orders);
        } else {
          setError("Failed to fetch orders");
        }
      })
      .catch((err) => {
        setError("Error: " + err.message);
      });
  }, []);

  return (
    <div className="Order">
      <h1>Orders</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul className="user-cards">
          {orders.map((order) => (
            <li key={order._id} className="user-card">
              Total: ${order.totalPrice}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
