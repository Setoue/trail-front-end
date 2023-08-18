import { useState } from "react";

import style from "./List.module.scss";
import Item from "./Item";

const List = () => {
  const [tasks, setTasks] = useState([
    { name: "React", time: "02:00:00" },
    { name: "Javascript", time: "01:00:00" },
    { name: "Typescript", time: "01:00:00" },
    { name: "HTML", time: "00:30:00" },
    { name: "CSS", time: "00:30:00" },
  ]);

  const handleAddTask = () => {
    setTasks([...tasks, { name: "State", time: "05:00" }]);
  };

  return (
    <aside className={style.taskList}>
      <h2 onClick={handleAddTask}>Study day</h2>
      <ul>
        {tasks && tasks.map((task, index) => <Item key={index} {...task} />)}
      </ul>
    </aside>
  );
};

export default List;
