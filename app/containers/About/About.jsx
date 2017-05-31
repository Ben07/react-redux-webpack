import React from 'react';
const About = ({history}) =>
    <div>
        <p>xxxholic</p>
        <button onClick={()=>history.goBack()}>go back</button>
    </div>;


export default About;
