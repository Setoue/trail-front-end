import Timer from "../components/Timer";
import Forms from "../components/Forms";
import List from "../components/List";
import style from "./style.module.scss";

import { useState } from "react";
import { ITask } from "../types/ITasks";

function App() {
  const [tasks, setTasks] = useState<Array<ITask> | []>([]);
  const [selected, setSelected] = useState<ITask>();

  const selectTask = (selectTask: ITask) => {
    setSelected(selectTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) => ({
        ...task,
        selected: task.id === selectTask.id ? true : false,
      }))
    );
  };

  return (
    <div className={style.AppStyle}>
      <h1>Writing with TypeScript</h1>
      <Forms setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer />
    </div>
  );
}

export default App;
