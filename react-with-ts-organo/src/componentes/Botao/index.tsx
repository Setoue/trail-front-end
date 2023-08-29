// import React, { ReactElement, JSXElementConstructor } from "react";
import "./Botao.css";

interface ButtonProps {
  children: string; //ReactElement<string, string | JSXElementConstructor<any>>;
}

const Botao = ({ children }: ButtonProps) => {
  return <button className="botao">{children}</button>;
};

export default Botao;
