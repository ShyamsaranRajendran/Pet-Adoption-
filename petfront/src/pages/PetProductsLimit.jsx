import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

// Sample data structure for quantities
const initialData = [
  { name: "Product 1", quantity: 0 },
  { name: "Product 2", quantity: 0 },
  { name: "Product 3", quantity: 0 },
  { name: "Product 4", quantity: 0 },
  { name: "Product 5", quantity: 0 },
];

const PetProductsLimit = () => {
  const [data, setData] = useState(initialData);
  const fetchQuantities = async () => {
    try {
      const response = await axios.get("http://localhost:5000/PetFood/quantity");
      const { quantities } = response.data;

      setData(quantities);
    } catch (error) {
      console.error("Error fetching quantities:", error);
    }
  };

  useEffect(() => {
    fetchQuantities();
  }, []);

  return (
    <div className="PetProductsLimit">
      <h2>Pet Products Quantity Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantity" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PetProductsLimit;
