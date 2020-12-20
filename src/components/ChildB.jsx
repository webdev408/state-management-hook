import React, { useContext } from 'react';
import { Pricingprovider } from './Pricingcontext';

function ChildB() {
    const obj=useContext(Pricingprovider)
    return (
        <div className='container'>
            <h1>This is a ChildB Component</h1>
            <h2 className='text-primary'>Food Item prices are: {obj.Prices}</h2>
        </div>
    )
}

export default ChildB;
