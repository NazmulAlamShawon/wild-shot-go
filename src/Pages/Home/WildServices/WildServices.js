import React, { useEffect, useState } from 'react';

const WildServices = () => {
    const [wildservices,setWildservices] = useState([])
    useEffect(()=>{
        fetch('myData.json')
        .then(res => res.json())
        .then(data => setWildservices(data));
    },[])
    return (
        <div>
           <h2>WildServices: {wildservices.length}</h2>
        </div>
    );
};

export default WildServices;