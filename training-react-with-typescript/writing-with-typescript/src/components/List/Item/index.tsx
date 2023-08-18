import ITask from "../../../types/task";
import style from "../List.module.scss";

const Item = ({ name, time, selected, completed, id }: ITask) => {
  console.log({ name, time, selected, completed, id });
  return (
    <li className={style.task}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;
