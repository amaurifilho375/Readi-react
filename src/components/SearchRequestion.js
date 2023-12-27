import React, { useState, useEffect } from "react";

const SearchCertificate = () => {
  const [certificateData, setCertificateData] = useState(null);
  const [useData, setUseData] = useState(null);
  const userId = 13; // Altere o ID do usuário conforme necessário

  useEffect(() => {
    const fetchCertificate = async () => {
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      const userId = parseInt(storedUserData.id);
      const storedUserToken = localStorage.getItem("userToken");

      try {
        const response = await fetch(
          `http://localhost:3333/user/${userId}/search-certificate`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-access-token": storedUserToken,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUseData(data);
        setCertificateData(data);
        console.log("front:", data.user.name);
      } catch (error) {
        console.error("Error fetching certificate:", error);
      }
    };

    fetchCertificate();
  }, [userId]);

  return (
    <div>
      <h2>Certificate Data:</h2>
      {certificateData ? (
        <ul>
          <li>ID: {useData.user.id}</li>
          <li>Name: {useData.user.name}</li>
          {/* Adicione outros campos conforme a estrutura dos dados retornados */}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchCertificate;
