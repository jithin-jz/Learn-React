import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My Bootstrap App</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Home />
      </Container>
    </>
  );
}

export default App;
