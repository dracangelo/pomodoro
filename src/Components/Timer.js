import React from 'react';

const Timer = ({ time }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h1>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</h1>
    </div>
  );
};

export default Timer;
