import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice"; // Ensure this exists in Redux
import UserProfileChart from "../components/Charts/UserProfileChart";
import "../styles/global.css"; // Import styles

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Clear authentication state
    navigate("/signin"); // Redirect to Sign-In page
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="dashboard-subtitle">Visualizations and trends</p>
      
      <UserProfileChart />
      <div className="button-group">
        <button className="home-btn" onClick={() => navigate("/home")}>
          🏠 Home
        </button>
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
