import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavigationBar() {
  return (
    <Navbar data-testid="navbar" expand="lg" className=".bg-transparent " style={{
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.0))'}}>
      <Container style={{justifyContent: 'center'}}>
        <Navbar.Brand href="#home" className='.fs-1 text text-white fw-bold d-flex justify-content-center'>
        <h1>Map Walker</h1>
      </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;