import { useRef, useState } from "react";

const useStopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let timeInterval = useRef<number>(0);

  const handleStart = () => {
    if (isRunning) return;

    setIsRunning(true);

    timeInterval.current = window.setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 10);
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);

    return timer;
  };

  const handleReset = () => {
    setIsRunning(false);

    clearInterval(timeInterval.current);

    setTimer(0);
  };

  const formatTime = (timer: number) => {
    const minutes = Math.floor(timer / 60000).toString();
    /*.padStart(2, "0");
    const seconds = Math.floor((timer / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = (timer % 1000).toString().padStart(3, "0");*/

    return { minutes /*, seconds, milliseconds*/ };
  };

  const { minutes /*, seconds, milliseconds*/ } = formatTime(timer);

  return {
    isRunning,
    handleStart,
    handlePause,
    handleReset,
  };
};

export default useStopwatch;
