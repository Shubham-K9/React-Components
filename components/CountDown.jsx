import { useState, useEffect } from "react";

const CountDown = () => {
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    else if (time === 0) {
      alert("Time's up!");
    }

    return () => clearInterval(interval);
  }, [time, isActive]);

  const handlePause = () => {
    setIsActive((prev) => !prev);
  };

  const handleReset = () => {
    setTime(10);
    setIsActive(false);
  };

  return (
    <div className="countdown-container">
      <h2 className="heading">CountDown Component</h2>

      <div className="button-group">
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>

        <button className="btn start" onClick={handlePause}>
          {isActive ? "Pause" : "Start"}
        </button>
      </div>

      <h1 className="timer">{time} sec</h1>
    </div>
  );
};

export default CountDown;
