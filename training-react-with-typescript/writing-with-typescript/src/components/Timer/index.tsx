import Clock from "./Clock";
import Button from "../Button";
import style from "./Timer.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { IPropsTime } from "../../types/ITasks";
import { useState } from "react";

const Timer = ({ selected }: IPropsTime) => {
  const [timer, setTimer] = useState<number>();
  if (selected?.time) {
    timeToSeconds(selected.time);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Choice a card and start the timer</p>
      Time: {timer}
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button name="Start" />
    </div>
  );
};

export default Timer;
