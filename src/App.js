import React, { useState, useEffect } from 'react';
import Timer from './Components/Timer';
import TodoList from './Components/TodoList';
import RestBar from './Components/RestBar';
import LongRestBar from './Components/LongRestBar';
import ReactPlayer from 'react-player';

const App = () => {
  const [timer, setTimer] = useState(1500); // Initial timer value: 25 minutes
  const [restTime, setRestTime] = useState(300); // 5 minutes
  const [longRestTime, setLongRestTime] = useState(900); // 15 minutes
  const [todos, setTodos] = useState([]);
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        // Timer finished, handle rest or long rest
        if (todos.length > 0) {
          // Has todos, start rest time
          setRestTime(300);
          setTimer(restTime);
          setPlaySound(true);
        } else {
          // No todos, start long rest time
          setLongRestTime(900);
          setTimer(longRestTime);
          setPlaySound(true);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, restTime, longRestTime, todos]);

  return (
    <div>
      <Timer time={timer} />
      <TodoList todos={todos} />
      <RestBar time={restTime} />
      <LongRestBar time={longRestTime} />

      {/* Add music playback component */}
      {playSound && (
        <ReactPlayer
          url="path/to/your/music.mp3"
          playing={true}
          onEnded={() => setPlaySound(false)}
          volume={0.5}
        />
      )}
    </div>
  );
};

export default App;
