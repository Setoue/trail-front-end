import style from "./List.module.scss";
import Item from "./Item";
import ITask from "../../types/task";

const List = ({ tasks }: { tasks: Array<ITask> }) => {
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
