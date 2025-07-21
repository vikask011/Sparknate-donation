// AdminPage.jsx
import React from "react";
import Admin from "../Components/Admin";
import Login from "../Components/signin"; // Make sure path is correct

const AdminPage = () => {
  const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {isLoggedIn ? <Admin /> : <Login />}
    </div>
  );
};

export default AdminPage;
