import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Container className="mt-5 text-center">
            <h1>Welcome to the Entertainment Agency!</h1>
            <p className="lead">Find the right entertainers to book today.</p>
            <Button variant="primary">
                <Link to="/entertainers" style={{ textDecoration: 'none', color: 'white' }}>
                    View Entertainers
                </Link>
            </Button>
        </Container>
    );
};

export default Landing;