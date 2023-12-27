import React from "react";
import { useUser } from "./Login"; // Importe o hook useUser

const SwowRequest = () => {
  const userData = useUser(); // Use o hook para obter os dados do usuário

  return (
    <div>
      <h2>Outro Componente</h2>
      {userData && (
        <>
          <p>Nome do usuário: {userData.name}</p>
          <p>ID do usuário: {userData.id}</p>
          <p>Token do usuário: {userData.token}</p>
        </>
      )}
    </div>
  );
};

export default SwowRequest;
