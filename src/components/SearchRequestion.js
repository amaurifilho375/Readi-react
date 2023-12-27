import React, { useState, useEffect } from "react";
//import "./styles.css";
import "./SearchCertificate.css";

const SearchCertificate = () => {
  const [certificateData, setCertificateData] = useState(null);
  const [useData, setUseData] = useState(null);
  useEffect(() => {
    const fetchCertificate = async () => {
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      const userId = parseInt(storedUserData?.id);
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
        setCertificateData(data.user.requests);
        setUseData(data.user.name);
        console.log("front:", data.user.name);
      } catch (error) {
        console.error("Error fetching certificate:", error);
      }
    };

    fetchCertificate();
  }, []);
  return (
    <div className="container">
      <h2 className="title">Solicitações da(o) {useData}</h2>
      {certificateData ? (
        <ul>
          {certificateData.map((request) => (
            <li key={request.id}>
              <p>ID: {request.id}</p>
              <p>Name: {request.nome_completo}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchCertificate;
