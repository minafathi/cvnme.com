import React from 'react';
import './Welcome.css';

const welcome = (props) => {
    return (
        <div className="WelcomeIn">
            <h2 className="font-bold WelcomeTitle">Welcome to IN+</h2>
            <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p><small className="WelcomeSmall">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</small></p>
        </div>
    );
};

export default welcome;