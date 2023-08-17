import React from "react";
import Forms from "../components/Forms";
import List from "../components/List";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <h1>Writing with TypeScript</h1>
      <Forms />
      <List />
    </div>
  );
}

export default App;
