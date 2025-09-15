import { useState, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsRunning(false);
    } else {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Timer</h2>
      <TimerDisplay time={time} />
      <TimerControls
        isRunning={isRunning}
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />
    </div>
  );
};

export default Timer;
