import React from "react";

const Button = () => {
  const backgroundColor = "purple";
  const isActived = true;

  const styles = {
    backgroundColor: isActived ? backgroundColor : "gray",
  };
  return <button style={styles}>Botão</button>;
};

export default Button;
