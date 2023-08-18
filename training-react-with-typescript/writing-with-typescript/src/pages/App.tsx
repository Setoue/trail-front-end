import Timer from "../components/Timer";
import Forms from "../components/Forms";
import List from "../components/List";
import style from "./style.module.scss";

import { useState } from "react";
import ITask from "../types/task";

function App() {
  const [tasks, setTasks] = useState<Array<ITask> | []>([]);

  const handleAddTask = () => {
    setTasks([...tasks, { name: "State", time: "05:00" }]);
  };

  return (
    <div className={style.AppStyle}>
      <h1>Writing with TypeScript</h1>
      <Forms setTasks={setTasks} />
      <List tasks={tasks} />
      <Timer />
    </div>
  );
}

export default App;
