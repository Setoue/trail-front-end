import Clock from "./Clock";
import Button from "../Button";
import style from "./Timer.module.scss";

const Timer = () => {
  return (
    <div className={style.timer}>
      <p className={style.title}>Choice a card and start the timer</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button name="Start" />
    </div>
  );
};

export default Timer;
