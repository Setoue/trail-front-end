import React, { useState } from "react";
import styled from "styled-components";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import * as style from "../UI/index";

const IconeMargin = styled(style.Icone)`
  margin-top: 2px;
`;

const BoxMargin = styled.div`
  font-size: 26px;
  padding: 20px 0;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <style.Box>
      <h2>Conta</h2>
      <BoxMargin>
        Saldo disponível{" "}
        <span>
          <style.IconeTheme src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <div className="saldo">
            <style.Detail>R$</style.Detail> 0,00{" "}
          </div>
        ) : null}
      </BoxMargin>

      <style.Button onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </style.Button>
    </style.Box>
  );
};

export default Conta;
