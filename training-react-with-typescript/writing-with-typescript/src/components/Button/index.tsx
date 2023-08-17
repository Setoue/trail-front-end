import style from "./Button.module.scss";

const Button = (prop: { name: string }) => {
  return <button className={style.button}>{prop.name}</button>;
};

export default Button;
