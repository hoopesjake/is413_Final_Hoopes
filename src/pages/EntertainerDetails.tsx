import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEntertainerById, updateEntertainer, deleteEntertainer } from '../api/entertainerApi';
import { Container, Form, Button, Spinner } from 'react-bootstrap';

interface Entertainer {
    entertainerId: number;
    entStageName: string;
    entSsn: string;
    entStreetAddress: string;
    entCity: string;
    entState: string;
    entZipCode: string;
    entPhoneNumber: string;
    entWebPage: string;
    entEmailAddress: string;
    dateEntered: string;
}

const EntertainerDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [entertainer, setEntertainer] = useState<Entertainer | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getEntertainerById(Number(id))
                .then(res => {
                    setEntertainer(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Failed to fetch entertainer', err);
                    setLoading(false);
                });
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!entertainer) return;
        setEntertainer({ ...entertainer, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (!entertainer) return;
        updateEntertainer(entertainer.entertainerId, entertainer)
            .then(() => navigate('/entertainers'))
            .catch(err => console.error('Failed to update', err));
    };

    const handleDelete = () => {
        if (!entertainer) return;

        const confirm = window.confirm(
            `Are you sure you want to delete ${entertainer.entStageName}? This action cannot be undone.`
        );

        if (!confirm) return;

        deleteEntertainer(entertainer.entertainerId)
            .then(() => navigate('/entertainers'))
            .catch(err => console.error('Failed to delete', err));
    };

    if (loading || !entertainer) {
        return (
            <Container className="mt-4 text-center">
                <Spinner animation="border" />
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <Button
                variant="secondary"
                className="mb-3"
                onClick={() => navigate('/entertainers')}
            >
                ← Back to List
            </Button>
            <h2>Entertainer Details</h2>
            <Form>
                {Object.entries(entertainer).map(([key, value]) => (
                    key !== "entertainerId" && (
                        <Form.Group className="mb-3" controlId={key} key={key}>
                            <Form.Label>{key}</Form.Label>
                            <Form.Control
                                type="text"
                                name={key}
                                value={value || ''}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    )
                ))}
                <Button variant="primary" onClick={handleSave} className="me-2">
                    Save Changes
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete Entertainer
                </Button>
            </Form>
        </Container>
    );
};

export default EntertainerDetails;