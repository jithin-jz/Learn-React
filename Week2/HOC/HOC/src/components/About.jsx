import React from 'react';
import WithHover from '../hoc/WithHover';

const About = ({ isHover }) => {
  return (
    <p style={{ fontStyle: isHover ? 'italic' : 'normal' }}>
      About Page - Hover to see effect!
    </p>
  );
};

export default About;
export const AboutHover = WithHover(About);
