import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUnsavedChanges } from "../../store/userSlice";
import "./UserForm.css";

const UserForm = () => {
  const dispatch = useDispatch();
  const savedUser = useSelector((state) => state.user.user);
  
  const [userData, setUserData] = useState(() => savedUser || {
    id: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  const [hasChanges, setHasChanges] = useState(false);

  // Handle Form Changes
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setHasChanges(true);
    dispatch(setUnsavedChanges(true));
  };

  // Generate User ID & Save Data
  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userData.id || `USER-${Date.now()}`;
    const newUser = { ...userData, id: userId };

    dispatch(setUser(newUser));
    setUserData(newUser);
    setHasChanges(false);
    dispatch(setUnsavedChanges(false));
    alert("User Data Saved Successfully!");
  };

  // Warn User About Unsaved Changes Before Leaving
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasChanges) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes. Are you sure you want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasChanges]);

  return (
    <div className="user-form">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={userData.name} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={userData.address} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={userData.phone} onChange={handleChange} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
