import React, { useState, useEffect } from "react";
import "./UserForm.css";

const UserDetailsForm = () => {
  // Sample JSON user data (You can modify or fetch dynamically)
  const [userData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "User",
  });

  const [textField, setTextField] = useState(""); // Second input
  const [userId, setUserId] = useState(""); // Third input (Auto-generated)

  // Generate unique ID on component mount
  useEffect(() => {
    setUserId(`USR-${Date.now()}`);
  }, []);

  const handleSave = () => {
    const newUser = {
      userData,
      textField,
      userId,
    };
    console.log("Saved Data:", newUser);
    alert("User Data Saved Successfully!");
  };

  return (
    <div className="user-form">
      <h2>User Details Form</h2>

      {/* Display user data as JSON (Read-only) */}
      <textarea
        className="json-field"
        value={JSON.stringify(userData, null, 2)}
        readOnly
      />

      {/* Text Field Input */}
      <input
        type="text"
        placeholder="Enter Details"
        value={textField}
        onChange={(e) => setTextField(e.target.value)}
      />

      {/* Auto-generated ID Field (Read-only) */}
      <input type="text" value={userId} readOnly />

      {/* Save Button */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserDetailsForm;
