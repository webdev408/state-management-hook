import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

const Home = () => {
    const [technology, setTechnology] = useState([
        {id:uuid(), name: 'JavaScript ***', use: 'interactivity ***', application: 'Front-End Web Development'},
        {id:uuid(), name: 'CSS3, SCSS ***', use: 'Styling, Design ***', application: 'Web Development'},
        {id:uuid(), name: 'ReactJS ***', use: 'UX/UI ***', application: 'Front-End Web Development'},
        {id:uuid(), name: 'Python Django ***', use: 'Data Management, UX/UI ***', application: 'Server side Development'},
        {id:uuid(), name: 'Bootstrap5 ***', use: 'Web Library ***', application: 'Front-end Web Development'},
    ])

    const addItem = () => {
        setTechnology([...technology, {id:uuid(), name:"HTML5 ***", use: 'Mark up ***', application: 'Web Development'}])
    }

    return (
        <div className='container bg-light'>
        <h1>Tech Solution to the Rescue</h1>
        <p>We believe 21st century problems, constraints and issues need 21st century solutions. Tech solution is precisely that. We believe tech solutions can not only revolutionize operational procedures can even add new dimensions that impact strategic planning for sustained growth.</p>
        <p>An essential ingredient for any organizational survival is being online. If your presence is not online then not much you can do to modernize your business, to carve a niche for your business and to sustain the very existence of your organization. Once you are online, you can connect to the globe and can think the world as your oyster. We have the following technologies to put you conspicuously online and to tap the functionalities of online technologies for your custom operations. Here is a gist of our online technologies:</p>
            <hr/>
            <ul>
            <h2>Basic Technologies Applied Regularly:</h2>
            {technology.map(technology => {
                return (<li key={technology.id}>{technology.name}{technology.use}{technology.application}
                    </li>)
                })}
            </ul>
            <button onClick={addItem}>AddItem</button>
         </div>
        )
      }

export default Home;
