import { useEffect, useState, useLayoutEffect } from "react";
import PropTypes from "prop-types";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);
  const [time, setTime] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  // タイマースタートする関数
  const startStopTmr = () => {
    if (timerStart) {
      setTimerStart(false);
    } else {
      setTimerStart(true);
    }
  };

  // タイマーリセットする関数
  const resetTmr = () => {
    setTimerStart(false);
    setTime(0);
  };

  // 非表示にする関数
  const onClickDisp = () => {
    setTimerStart(false);
    setIsDisp((prev) => !prev);
  };

  return (
    <>
      {isDisp && (
        <Timer time={time} setTime={setTime} timerStart={timerStart} />
      )}
      <button onClick={() => startStopTmr()}>
        {timerStart ? "一時停止" : "スタート"}
      </button>
      {/* <button onClick={() => setTime(0)}>リセット</button> */}
      <button onClick={() => resetTmr()}>リセット</button>
      <br />
      {/* <button onClick={() => setIsDisp((prev) => !prev)}>非表示</button> */}
      <button onClick={() => onClickDisp((prev) => !prev)}>
        {isDisp ? "非表示" : "表示"}
      </button>
    </>
  );
};

const Timer = (props) => {
  const { time, setTime, timerStart } = props;
  // const [time, setTime] = useState(0);
  // JSなので、この形で型定義
  Timer.propTypes = {
    time: PropTypes.number.isRequired,
    setTime: PropTypes.func.isRequired,
    timerStart: PropTypes.bool.isRequired,
  };
  // タイマーを１秒ずつ足していくuseEffect
  useEffect(() => {
    if (timerStart) {
      // console.log('init');
      let intervalId = null;
      intervalId = window.setInterval(() => {
        // console.log('interval running');
        setTime((prev) => prev + 1);
      }, 1000);
      return () => {
        window.clearInterval(intervalId);
        // console.log('end');
      };
    }
  }, [timerStart]);

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

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
