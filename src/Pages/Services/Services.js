import React from 'react';
import { useParams } from 'react-router-dom';

const Services = () => {
    const {servicesId} = useParams();
    return (
        <div>
           <h2>Welcome to service details:{servicesId}</h2>
        </div>
    );
};

export default Services;