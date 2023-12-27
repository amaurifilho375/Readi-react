import React from "react";
import { Link } from "react-router-dom";
import "./dashboardStyles.css";

const Dashboard = () => {
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  const storedUserToken = localStorage.getItem("userToken");

  return (
    <div className="container">
      <h2 className="title">Dashboard</h2>
      {storedUserData && (
        <div className="userInfo">
          <p className="userDetails">Nome do usuário: {storedUserData.name}</p>
          <p className="userDetails">ID do usuário: {storedUserData.id}</p>

          <Link to="/search-request">
            <button>Exibir</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
