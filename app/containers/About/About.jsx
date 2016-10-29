import React from 'react';
import {hashHistory} from 'react-router';
const About = () =>
    <div>
        <p>xxxholic</p>
        <button onClick={()=>hashHistory.goBack()}>go back</button>
    </div>;


export default About;
