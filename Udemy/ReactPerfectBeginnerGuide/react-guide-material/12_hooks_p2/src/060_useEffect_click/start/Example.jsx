import { useEffect, useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);
  // const [timerStart, setTimerStart] = useState(false);
  const [isRunning, setIsrunnning] = useState(false);

  // 非表示にする関数
  const onClickDisp = () => {
    setIsrunnning(false);
    setIsDisp((prev) => !prev);
  };

  return (
    <>
      <Timer
        isDisp={isDisp}
        isRunning={isRunning}
        setIsrunnning={setIsrunnning}
      />
      <button onClick={() => onClickDisp((prev) => !prev)}>
        {isDisp ? "非表示" : "表示"}
      </button>
    </>
  );
};

const Timer = (props) => {
  const { isDisp, isRunning, setIsrunnning } = props;
  const [time, setTime] = useState(0);
  // JSなので、この形で型定義
  Timer.propTypes = {
    isDisp: PropTypes.bool.isRequired,
    isRunning: PropTypes.bool.isRequired,
    setIsrunnning: PropTypes.func.isRequired,
  };
  // タイマーを１秒ずつ足していくuseEffect
  useEffect(() => {
    console.log("init");
    let intervalId = null;

    if (isRunning) {
      console.log("timer start ");
      intervalId = window.setInterval(() => {
        console.log("interval running");
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
      console.log("end");
    };
  }, [isRunning]);

  // タイマーをストレージにセットして、タブ錠にも表示するuseEffect
  useEffect(() => {
    // console.log('updated');

    document.title = "counter:" + time;
    window.localStorage.setItem("time-key", time);

    return () => {
      // debugger
      // console.log('updated end');
    };
  }, [time]);

  // ストレージからタイマーを読み込むuseLayoutEffect
  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key"));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  // タイマースタートと一時停止を制御する関数
  const toggle = () => {
    // if (isRunning) {
    //   setIsrunnning(false);
    // } else {
    //   setIsrunnning(true);
    // }
    setIsrunnning((prev) => !prev);
  };

  // タイマーリセットする関数
  const reset = () => {
    setIsrunnning(false);
    setTime(0);
  };

  return (
    <>
      {isDisp && (
        <>
          <h3>
            <time>{time}</time>
            <span>秒経過</span>
          </h3>
          <button onClick={toggle}>
            {isRunning ? "一時停止" : "スタート"}
          </button>
          <button onClick={reset}>リセット</button>
          <br />
        </>
      )}
    </>
  );
};

export default Example;
