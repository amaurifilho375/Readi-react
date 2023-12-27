import React from "react";
import { useUser } from "./Login";

const SwowRequest = () => {
  const userData = useUser();

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
