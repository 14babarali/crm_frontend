import React from 'react';
import { useParams } from 'react-router-dom';

const CustomerDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Customer Details</h1>
            <p>Customer ID: {id}</p>
            {/* Implement details view here */}
        </div>
    );
};

export default CustomerDetails;
    