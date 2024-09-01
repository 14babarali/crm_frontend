import React, { useEffect, useState } from 'react';
import API from '../api';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        API.get('/customers')
            .then((response) => {
                setCustomers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching customers:', error);
            });
    }, []);

    return (
        <div>
            <h1>Customer List</h1>
            <ul>
                {customers.map((customer) => (
                    <li key={customer._id}>
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
