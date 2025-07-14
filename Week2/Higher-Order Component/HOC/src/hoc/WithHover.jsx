import React, { useState } from 'react';

const WithHover = (WrappedComponent) => {
  return () => {
    const [isHover, setHover] = useState(false);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isHover ? { backgroundColor: 'skyblue' } : {}}
      >
        <WrappedComponent isHover={isHover} />
      </div>
    );
  };
};

export default WithHover;
