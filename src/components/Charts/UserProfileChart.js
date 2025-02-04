import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Jan", users: 30 },
  { name: "Feb", users: 40 },
  { name: "Mar", users: 50 },
  { name: "Apr", users: 70 },
  { name: "May", users: 90 },
];

const UserProfileChart = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
};

export default UserProfileChart;