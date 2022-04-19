import React from 'react';
import { Button } from 'react-bootstrap';
import './Wildservice.css'
import { ShoppingCartIcon} from '@heroicons/react/solid'

const WildService = ({wildservice}) => {
    const {name,img,price,description} = wildservice;
    return (
        <div className='cardg'>
         <img src={img} alt=""  className='imgsrc'/>
            <h2> {name}</h2>
            <p> price: {price}</p>
            <p> Description:{description}</p>
            <Button className='p-3  text-center m-2'> <span className='btngrp'> <ShoppingCartIcon className=" btnicon text-blue"/>Add to Chart</span></Button>    

        </div>
    );
};

export default WildService;