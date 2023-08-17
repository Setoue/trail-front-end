import Timer from "../components/Timer";
import Forms from "../components/Forms";
import List from "../components/List";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <h1>Writing with TypeScript</h1>
      <Forms />
      <List />
      <Timer />
    </div>
  );
}

export default App;
