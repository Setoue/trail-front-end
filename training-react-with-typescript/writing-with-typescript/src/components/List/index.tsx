import style from "./style.module.scss";
import Item from "./Item";

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
        {tasks && tasks.map((task, index) => <Item key={index} {...task} />)}
      </ul>
    </aside>
  );
};

export default List;
