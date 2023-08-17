import style from "./style.module.scss";

const List = () => {
  const tasks = [
    { name: "React", time: "02:00:00" },
    { name: "Javascript", time: "01:00:00" },
    { name: "Typescript", time: "01:00:00" },
    { name: "HTML", time: "00:30:00" },
    { name: "CSS", time: "00:30:00" },
  ];

  return (
    <aside className={style.taskList}>
      <h2>Study day</h2>
      <ul>
        {tasks &&
          tasks.map((task, index) => (
            <li className={style.task} key={index}>
              <h3>{task.name}</h3>
              <span>{task.time}</span>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default List;
