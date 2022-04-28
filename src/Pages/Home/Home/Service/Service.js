import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    const { id, name, img, price, description} = props.service
    const navigate = useNavigate(id)
    const navigateToServiceDetail =() => {
           navigate(`/service/${id}`) 
    }
    return (
        <div className='service-container'> 
            <img className='w-100' src={img} alt="" />
           <h2>{name}</h2>
           <p>Price: {price}</p>
           <p><small>{description}</small></p>
           <button onClick={ () => navigateToServiceDetail(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;