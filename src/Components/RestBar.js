import React from 'react';

const RestBar = ({ time }) => {
  return (
    <div>
      <h2>Rest Bar</h2>
      {/* Add styling or progress bar for rest time */}
      <p>{`Rest Time: ${time} seconds`}</p>
    </div>
  );
};

export default RestBar;
