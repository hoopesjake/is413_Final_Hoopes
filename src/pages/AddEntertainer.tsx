import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEntertainer } from '../api/entertainerApi';
import { Container, Form, Button } from 'react-bootstrap';

const initialState = {
    entStageName: '',
    entSsn: '',
    entStreetAddress: '',
    entCity: '',
    entState: '',
    entZipCode: '',
    entPhoneNumber: '',
    entWebPage: '',
    entEmailAddress: '',
    dateEntered: ''
};

const AddEntertainer = () => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addEntertainer(formData)
            .then(() => navigate('/entertainers'))
            .catch(err => console.error('Failed to add entertainer', err));
    };

    return (
        <Container className="mt-4">
            <h2>Add New Entertainer</h2>
            <Form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    <Form.Group className="mb-3" controlId={key} key={key}>
                        <Form.Label>{key}</Form.Label>
                        <Form.Control
                            type="text"
                            name={key}
                            value={value}
                            onChange={handleChange}
                        />
                    </Form.Group>
                ))}
                <Button variant="success" type="submit">
                    Add Entertainer
                </Button>
            </Form>
        </Container>
    );
};

export default AddEntertainer;