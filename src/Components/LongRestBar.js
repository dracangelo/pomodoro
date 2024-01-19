import React from 'react';

const LongRestBar = ({ time }) => {
  return (
    <div>
      <h2>Long Rest Bar</h2>
      {/* Add styling or progress bar for long rest time */}
      <p>{`Long Rest Time: ${time} seconds`}</p>
    </div>
  );
};

export default LongRestBar;
