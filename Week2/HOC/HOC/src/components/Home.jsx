import React from 'react';
import WithHover from '../hoc/WithHover';

const Home = ({ isHover }) => {
  return <h1>{isHover ? 'You are hovering!' : 'Welcome to the Home Page'}</h1>;
};

export default Home;
export const HomeHover = WithHover(Home);
