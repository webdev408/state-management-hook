import React, { useContext } from 'react';
import { Pricingprovider } from './Pricingcontext';

function ChildA() {
    const obj=useContext(Pricingprovider)
    return (
        <div className='container'>
            <h1>This is ChildA component</h1>
            <h2 className='text-danger'>The hotfood items are: {obj.Hotfood}</h2>
        </div>
    )
}

export default ChildA;
