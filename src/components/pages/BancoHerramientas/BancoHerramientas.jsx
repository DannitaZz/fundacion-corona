import React from "react";
import "./BancoHerramientas.css";
import BankToolCard from "../../BankToolCard/BankToolCard";

export const BancoHerramientas = () => {
  return (
    <>
      <div className="containerCard">
        <BankToolCard img='./images/mGeneral.jpg' title='Marco general'></BankToolCard>
        <BankToolCard img='./images/mGestion.jpg' title='Gestión e implementación "OSO"'></BankToolCard>
        <BankToolCard img='./images/includere.jpg' title='Includere'></BankToolCard>
      </div>
    </>
  );
};
export default BancoHerramientas;
