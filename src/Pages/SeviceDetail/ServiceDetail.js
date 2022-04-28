import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h1>This is ServiceDetail: {serviceId}</h1>
            <div className='text-center'>
                <Link to ='/checkout'>
                    <button className='btn btn-primary'> Proceed CheckOut</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;