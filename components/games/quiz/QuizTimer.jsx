import { QUIZ_TIME_LIMIT_SECONDS } from "@/lib/constants";
import React, { useState, useEffect, useRef } from "react";

function QuizTimer({ onTimeUp }) {
  const [seconds, setSeconds] = useState(QUIZ_TIME_LIMIT_SECONDS);
  const intervalRef = useRef(null);

  const startCountdown = () => {
    if (intervalRef.current !== null) {
      // If there's already an interval running, clear it first
      clearInterval(intervalRef.current);
    }
    // Start a new countdown
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          // Time's up
          clearInterval(intervalRef.current);
          onTimeUp();
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);
  };

  // useEffect to start the timer based on the `startTimer` prop
  useEffect(() => {
    startCountdown();
    // Clean up the interval on unmount
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [onTimeUp]);

  // Format the time to MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  // Render the formatted time
  return <div className="text-primary">{formatTime(seconds)}</div>;
}

export default QuizTimer;
