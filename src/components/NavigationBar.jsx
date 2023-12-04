import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavigationBar() {
  return (
    <Navbar data-testid="navbar" expand="lg" className=".bg-transparent " style={{
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0))'}}>
      <Container>
        <Navbar.Brand href="#home" className='.fs-1 text text-white fw-bold d-flex justify-content-start'>
        <h1>Map Walker</h1>
      </Navbar.Brand>
        <div className='d-flex justify-content-end'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor: 'white'}}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{color: 'white'}}>
          <Nav className="me-auto">
              <Nav.Link data-testid="Settings" href="#home" className='text text-white px-5'>Settings</Nav.Link>  
              <Nav.Link href="#link" className='text text-white px-5'>Path Tracker</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;