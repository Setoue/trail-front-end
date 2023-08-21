import Clock from "./Clock";
import Button from "../Button";
import style from "./Timer.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { IPropsTime } from "../../types/ITasks";
import { useEffect, useState } from "react";

const Timer = ({ selected }: IPropsTime) => {
  const [timer, setTimer] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTimer(timeToSeconds(selected.time));
    }
  }, [selected]);

  return (
    <div className={style.timer}>
      <p className={style.title}>Choice a card and start the timer</p>
      <div className={style.clockWrapper}>
        <Clock time={timer} />
      </div>
      <Button name="Start" />
    </div>
  );
};

export default Timer;
