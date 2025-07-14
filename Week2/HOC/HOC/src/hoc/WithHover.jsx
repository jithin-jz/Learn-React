import React, { useState } from 'react';

const WithHover = (WrappedComponent) => {
  return (props) => {
    const [isHover, setIsHover] = useState(false);

    return (
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={isHover ? { backgroundColor: 'skyblue' } : undefined}
      >
        <WrappedComponent {...props} isHover={isHover} />
      </div>
    );
  };
};

export default WithHover;
