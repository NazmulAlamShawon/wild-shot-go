import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Services = () => {
    const {servicesId,} = useParams();
    return (
        <div>
           <h2>Welcome to service details:{servicesId}</h2>
           <Link to="/checkout">
            <button className='btn btn-primary'> Checkout</button>
           </Link>
           
        </div>
    );
};

export default Services;