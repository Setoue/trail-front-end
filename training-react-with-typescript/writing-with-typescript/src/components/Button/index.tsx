import style from "./Button.module.scss";

const Button = ({
  name,
  type = "button",
}: {
  name: string;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button type={type} className={style.button}>
      {name}
    </button>
  );
};

export default Button;
