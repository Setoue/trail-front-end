import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utiliddades from "../assets/images/utilidades.svg";
import { IconeTheme } from "./UI";

export default (type) => {
  const Images = {
    Restaurante: <IconeTheme src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconeTheme src={utiliddades} alt="Utilidades" />,
    Saude: <IconeTheme src={saude} alt="Saude" />,
    Transporte: <IconeTheme src={transporte} alt="Transporte" />,
    default: <IconeTheme src={outros} alt="Outros" />,
  };

  return Images[type] || Images.default;
};
