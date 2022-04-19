import React from 'react';
import { Button } from 'react-bootstrap';
import './Wildservice.css'
import { ShoppingCartIcon} from '@heroicons/react/solid'
import { useNavigate } from 'react-router-dom';

const WildService = ({wildservice}) => {
    const {id,name,img,price,description} = wildservice;
    const navigate = useNavigate();
    const navigateToService = id =>{
        navigate(`/services/${id}`)
         
    }
    return (
        <div className='cardg'>
         <img src={img} alt=""  className='imgsrc'/>
            <h2> {name}</h2>
            <p> price: {price}</p>
            <p> Description:{description}</p>
            <Button onClick={()=>navigateToService(id)} className='p-3  text-center m-2'> <span className='btngrp'> <ShoppingCartIcon className=" btnicon text-blue"/>Add to Chart</span></Button>    

        </div>
    );
};

export default WildService;