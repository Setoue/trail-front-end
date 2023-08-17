import style from "../style.module.scss";

const Item = ({ name, time }: { name: string; time: string }) => {
  return (
    <li className={style.task}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;
