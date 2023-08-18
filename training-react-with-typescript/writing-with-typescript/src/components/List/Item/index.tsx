import { IPropsItem } from "../../../types/ITasks";
import style from "../List.module.scss";

const Item = ({
  name,
  time,
  selected,
  completed,
  id,
  selectTask,
}: IPropsItem) => {
  console.log({ name, time, selected, completed, id });
  return (
    <li
      className={style.task}
      onClick={() =>
        selectTask({
          name,
          time,
          selected,
          completed,
          id,
        })
      }
    >
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;
