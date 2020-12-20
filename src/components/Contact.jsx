import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

const Contact = () => {
    const [clientList, setClientList] = useState([
        {id:uuid(), name: 'Brianna Sinclair ##', Order: 'chicken wings ##', Quantity: '12 wings'},
        {id:uuid(), name: 'Crystal Fugate ##', Order: 'Pizza Combo ##', Quantity: '1 pizza 2 Pops'},
        {id:uuid(), name: 'Jesse Holmes ##', Order: 'Cold Beverages ##', Quantity: '2 monster 1 Pop'},
        {id:uuid(), name: 'Greg Lenord ##', Order: 'Meal combo ##', Quantity: '1 sandwich 1 Pop'},
    ])
    

    const addItem = () => {
        setClientList([...clientList, {id: uuid(), name: "Brian Masse ##", Order: 'Bakery ##',
         Quantity: '12 cookies'}])
    }   

    
    return (
        <div className='container'>
            <h1>Contact Us Virtually</h1>
                <ul>
                 {clientList.map(clientList => {
                 return (<li key={clientList.id}>{clientList.name}{clientList.Order}
                    {clientList.Quantity}</li>)
                 })}
                <br/>
            <textarea cols="60" rows="10">Please write your comment here!</textarea>
            <br/>
                  <button onClick={addItem}>OrderList</button>
            </ul>
        </div>
    )
}

export default Contact;
