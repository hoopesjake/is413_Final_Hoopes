import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEntertainers } from '../api/entertainerApi';
import { Table, Button, Container, Spinner, Alert } from 'react-bootstrap';

interface EntertainerSummary {
    entertainerId: number;
    entStageName: string;
    bookingCount: number;
    lastBooked: string | null;
}

const EntertainersList = () => {
    const [entertainers, setEntertainers] = useState<EntertainerSummary[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        getEntertainers()
            .then(response => {
                setEntertainers(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError('Could not load entertainers.');
                setLoading(false);
            });
    }, []);

    return (
        <Container className="mt-4">
            <h2>Entertainers</h2>
            {loading ? (
                <Spinner animation="border" />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Stage Name</th>
                            <th>Times Booked</th>
                            <th>Last Booked</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entertainers.map(e => (
                            <tr key={e.entertainerId}>
                                <td>{e.entStageName}</td>
                                <td>{e.bookingCount}</td>
                                <td>{e.lastBooked ? new Date(e.lastBooked).toLocaleDateString() : '—'}</td>
                                <td>
                                    <Button
                                        variant="info"
                                        size="sm"
                                        onClick={() => navigate(`/entertainers/${e.entertainerId}`)}
                                    >
                                        Details
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <Button
                variant="primary"
                className="mt-3"
                onClick={() => navigate('/entertainers/new')}
            >
                Add Entertainer
            </Button>
        </Container>
    );
};

export default EntertainersList;