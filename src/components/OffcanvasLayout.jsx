import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function OffcanvasLayout({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="success" expand="lg" style={{ position:'relative', bottom: '17.5em', left: '-14em' }}>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} style={{ color: 'black' }}>
          =
        </Navbar.Toggle>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        style={{ backgroundColor: 'white', height: '100vh', width: '163px', position: 'fixed', top: 0, zIndex: 1000, marginLeft: '8px' }}
      >
        <Offcanvas.Header closeButton={!show}>
          <Navbar.Brand as={Link} to="/" className="align-top">Navbar Offcanvas</Navbar.Brand>
          {show && <Nav.Link variant="secondary" onClick={handleClose}>X</Nav.Link>}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column ">
            <Nav.Link className="nav-links" as={Link} to="/login">Login</Nav.Link>
            <Nav.Link className="nav-links" as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link className="nav-links" as={Link} to="/add-destinations">Add Destinations</Nav.Link>

            {/* Add more Nav.Link items here */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div style={{ marginLeft: '163px' }}> {/* Adjust the margin to accommodate the offcanvas */}
        {children}
      </div>
    </>
  );
}

OffcanvasLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OffcanvasLayout;
