import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Entertainment Agency</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/entertainers">Entertainers</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;