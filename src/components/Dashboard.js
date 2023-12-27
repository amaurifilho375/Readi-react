// Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  const storedUserToken = localStorage.getItem("userToken");

  return (
    <div>
      <h2>Outro Componente</h2>
      {storedUserData && (
        <>
          <p>Nome do usuário: {storedUserData.name}</p>
          <p>ID do usuário: {storedUserData.id}</p>
          <p>Token do usuário: {storedUserToken}</p>
          <Link to="/search-request">
            <button>Exibir</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Dashboard;
