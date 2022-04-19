import React, { useEffect,  useState } from 'react';
import WildService from '../Wildservice/WildService';
import './wildservices.css'

const WildServices = () => {
    const [wildservices,setWildservices] = useState([])
    
    useEffect(()=>{
        fetch('myData.json')
        .then(res => res.json())
        .then(data => setWildservices(data));
    },[])
    return (
        <div>
           <h1 className='text-center text-primary mt-5 bg-dark '>WildServices: {wildservices.length}</h1>
            <div className="wild-container">
            {
               wildservices.map(wildservice =><WildService
                key = {wildservice.id}
                wildservice={wildservice}

               >
               </WildService>)
           }
            </div>
        </div>
    );
};

export default WildServices;