import React from "react";
import { Box, Button } from "../UI/index";
import { extratoLista } from "../../info";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map((list) => {
        return (
          <div key={list.id}>
            <div>{list.type}</div>
            <div>{list.from}</div>
          </div>
        );
      })}
      <Button>Ver mais</Button>
    </Box>
  );
};

export default Extrato;
