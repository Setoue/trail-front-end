import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import { colorFirst } from "../UI/variaveis.js";

const StyledHeader = styled.nav`
  background-color: ${colorFirst}
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const ImageLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const ButtonSecond = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: white;
  color: #41d3be;
`;

const ButtonFirst = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  color: white;
  background: transparent;
`;
const Cabecalho = () => {
  return (
    <StyledHeader>
      <ImageLogo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <ButtonSecond href="https://google.com">Ajuda</ButtonSecond>
        <ButtonFirst href="https://google.com">Sair</ButtonFirst>
      </div>
    </StyledHeader>
  );
};

export default Cabecalho;
