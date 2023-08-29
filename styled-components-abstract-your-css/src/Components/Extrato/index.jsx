import React from "react";
import { Box, Button } from "../UI/index";
import { extratoLista } from "../../info";
import Itens from "../Itens/Itens";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map((list) => {
        return <Itens key={list.id} list={list} />;
      })}
      <Button>Ver mais</Button>
    </Box>
  );
};

export default Extrato;
